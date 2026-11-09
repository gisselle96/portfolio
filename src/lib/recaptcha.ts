/** Google reCAPTCHA v3 test keys (always pass). Override with env in production. */
const RECAPTCHA_TEST_SITE_KEY =
  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const RECAPTCHA_TEST_SECRET_KEY =
  "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

export const RECAPTCHA_ACTION = "contact";

export function getRecaptchaSiteKey() {
  return (
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || RECAPTCHA_TEST_SITE_KEY
  );
}

export function getRecaptchaSecretKey() {
  return process.env.RECAPTCHA_SECRET_KEY?.trim() || RECAPTCHA_TEST_SECRET_KEY;
}

export type RecaptchaVerifyResult =
  | { ok: true }
  | { ok: false; reason: string };

export async function verifyRecaptchaToken(
  token: string,
): Promise<RecaptchaVerifyResult> {
  const secret = getRecaptchaSecretKey();
  const params = new URLSearchParams({
    secret,
    response: token,
  });

  let response: Response;
  try {
    response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      },
    );
  } catch {
    return { ok: false, reason: "no se pudo contactar a Google" };
  }

  if (!response.ok) {
    return { ok: false, reason: `HTTP ${response.status}` };
  }

  const payload = (await response.json()) as {
    success?: boolean;
    score?: number;
    action?: string;
    "error-codes"?: string[];
  };

  if (!payload.success) {
    const codes = payload["error-codes"]?.join(", ") || "token rechazado";
    return { ok: false, reason: codes };
  }

  if (typeof payload.score === "number" && payload.score < 0.3) {
    return { ok: false, reason: `score bajo (${payload.score})` };
  }

  if (payload.action && payload.action !== RECAPTCHA_ACTION) {
    return {
      ok: false,
      reason: `acción inesperada (${payload.action})`,
    };
  }

  return { ok: true };
}
