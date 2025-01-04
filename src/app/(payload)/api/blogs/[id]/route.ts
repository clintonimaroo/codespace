import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Record<string, string> } // Update the type here
) {
  try {
    const payload = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs/${params.id}`);
    const data = await payload.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching blog:", error); // Improved logging
    return NextResponse.json({ error: "Error fetching blog" }, { status: 500 });
  }
}
