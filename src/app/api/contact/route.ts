import { NextResponse } from "next/server";
import { profile } from "@/features/home/constants/content";
import { verifyRecaptchaToken } from "@/lib/recaptcha";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  captchaToken?: string;
};

type FormSubmitPayload = {
  success?: boolean | string;
  message?: string;
};

function getRequestOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    return origin;
  }
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      return new URL(referer).origin;
    } catch {
      return null;
    }
  }
  return process.env.NEXT_PUBLIC_SITE_URL?.trim() || null;
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  // Honeypot: bots that fill hidden fields get a fake success.
  if (body.company?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const captchaToken = body.captchaToken?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Completá nombre, email y mensaje." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  if (!captchaToken) {
    return NextResponse.json(
      { error: "Completá el captcha antes de enviar." },
      { status: 400 },
    );
  }

  const captcha = await verifyRecaptchaToken(captchaToken);
  if (!captcha.ok) {
    return NextResponse.json(
      { error: `Captcha inválido (${captcha.reason}). Probá de nuevo.` },
      { status: 400 },
    );
  }

  const origin = getRequestOrigin(request);
  const formSubmitResponse = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(origin
          ? {
              Origin: origin,
              Referer: `${origin}/`,
            }
          : {}),
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio · mensaje de ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    },
  );

  let payload: FormSubmitPayload = {};
  try {
    payload = (await formSubmitResponse.json()) as FormSubmitPayload;
  } catch {
    payload = {};
  }

  const success =
    payload.success === true ||
    payload.success === "true" ||
    (formSubmitResponse.ok && payload.success === undefined && !payload.message);

  if (!formSubmitResponse.ok || !success) {
    const messageText = payload.message?.toLowerCase() ?? "";
    const needsActivation =
      messageText.includes("activation") || messageText.includes("activate");

    return NextResponse.json(
      {
        error: needsActivation
          ? `FormSubmit necesita activación: revisá ${profile.email} y hacé click en Activate Form.`
          : payload.message ||
            "No se pudo enviar ahora. Probá de nuevo o escribime directo.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
