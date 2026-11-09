import { NextResponse } from "next/server";
import { profile } from "@/features/home/constants/content";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Completá nombre, email y mensaje." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  const formSubmitResponse = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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

  if (!formSubmitResponse.ok) {
    return NextResponse.json(
      {
        error:
          "No se pudo enviar ahora. Confirmá tu email en FormSubmit la primera vez, o escribime directo.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
