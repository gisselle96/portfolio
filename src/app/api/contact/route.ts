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

type MailProviderResult =
  | { ok: true }
  | { ok: false; error: string; status?: number };

async function sendWithWeb3Forms(input: {
  name: string;
  email: string;
  message: string;
  accessKey: string;
}): Promise<MailProviderResult> {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: input.accessKey,
      name: input.name,
      email: input.email,
      message: input.message,
      subject: `Portfolio · mensaje de ${input.name}`,
      from_name: "Portfolio Gisselle",
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
  };

  if (!response.ok || payload.success === false) {
    return {
      ok: false,
      status: 502,
      error:
        payload.message ||
        "No se pudo enviar ahora. Probá de nuevo o escribime directo.",
    };
  }

  return { ok: true };
}

async function sendWithFormSubmit(input: {
  name: string;
  email: string;
  message: string;
}): Promise<MailProviderResult> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        message: input.message,
        _subject: `Portfolio · mensaje de ${input.name}`,
        _template: "table",
        _captcha: "false",
      }),
    },
  );

  const payload = (await response.json().catch(() => ({}))) as {
    success?: boolean | string;
    message?: string;
  };

  const success =
    payload.success === true ||
    payload.success === "true" ||
    (response.ok && payload.success === undefined && !payload.message);

  if (!response.ok || !success) {
    const messageText = payload.message?.toLowerCase() ?? "";
    const needsActivation =
      messageText.includes("activation") || messageText.includes("activate");

    return {
      ok: false,
      status: 502,
      error: needsActivation
        ? `FormSubmit necesita activación: revisá ${profile.email} y hacé click en Activate Form. Si el link da error 500, usá Web3Forms (WEB3FORMS_ACCESS_KEY).`
        : payload.message ||
          "No se pudo enviar ahora. Probá de nuevo o escribime directo.",
    };
  }

  return { ok: true };
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

  const web3AccessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  const mail = web3AccessKey
    ? await sendWithWeb3Forms({
        name,
        email,
        message,
        accessKey: web3AccessKey,
      })
    : await sendWithFormSubmit({ name, email, message });

  if (!mail.ok) {
    return NextResponse.json(
      { error: mail.error },
      { status: mail.status ?? 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
