import { connection } from "next/server";
import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CvDocument } from "@/features/cv/components/CvDocument";
import { cvFileName } from "@/features/cv/constants/content";

export async function GET() {
  await connection();
  const buffer = await renderToBuffer(CvDocument());

  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${cvFileName}"`,
      "Cache-Control": "no-store",
    },
  });
}
