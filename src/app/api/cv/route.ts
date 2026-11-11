import { connection } from "next/server";
import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CvDocument } from "@/features/cv/components/CvDocument";
import { cvFileNameFor } from "@/features/cv/constants/content";

export async function GET(request: Request) {
  await connection();
  const locale = new URL(request.url).searchParams.get("lang") === "en" ? "en" : "es";
  const buffer = await renderToBuffer(CvDocument({ locale }));

  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${cvFileNameFor(locale)}"`,
      "Cache-Control": "no-store",
    },
  });
}
