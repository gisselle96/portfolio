import { connection } from "next/server";
import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CvDocument } from "@/features/cv/components/CvDocument";
import { cvFileNameFor } from "@/features/cv/constants/content";
import { profile } from "@/features/home/constants/content";

export async function GET(request: Request) {
  await connection();
  const url = new URL(request.url);
  const locale = url.searchParams.get("lang") === "en" ? "en" : "es";
  const withPhoto = url.searchParams.get("photo") === "1";
  const photoSrc = withPhoto ? new URL(profile.photoPath, url.origin).href : undefined;
  const buffer = await renderToBuffer(CvDocument({ locale, photoSrc }));

  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${cvFileNameFor(locale, { withPhoto })}"`,
      "Cache-Control": "no-store",
    },
  });
}
