import { NextResponse } from "next/server";
import { verifyRecaptchaToken } from "@/lib/recaptcha";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  captchaToken?: string;
};

/**
 * Validates honeypot + reCAPTCHA only.
 * Mail is sent from the browser via Web3Forms (their free plan blocks server IPs).
 */
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

  return NextResponse.json({ ok: true });
}
