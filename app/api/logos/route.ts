import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const logosDir = path.join(process.cwd(), "public", "logos");
    const files = await fs.readdir(logosDir);
    const svgs = files.filter((f) => f.toLowerCase().endsWith(".svg"));
    return NextResponse.json({ logos: svgs });
  } catch {
    return NextResponse.json({ logos: [] }, { status: 500 });
  }
}
