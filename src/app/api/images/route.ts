import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const imagesDirectory = path.join(
    process.cwd(),
    "public",
    "foreign-carousel-pics"
  );

  try {
    const filenames = fs.readdirSync(imagesDirectory);
    const images = filenames
      .filter((name) => name.match(/\.(jpg|jpeg|png|gif|webp)$/i))
      .sort()
      .map((name) => `/foreign-carousel-pics/${name}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.warn("Could not read images directory:", error);
    return NextResponse.json({ images: [] });
  }
}
