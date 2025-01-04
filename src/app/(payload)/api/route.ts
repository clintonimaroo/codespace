//import { NextRequest, NextResponse } from "next/server";

//export async function GET(
//  request: NextRequest,
//  context: { params: { id: string } }
//) {
//  try {
//    const payload = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs/${context.params.id}`);
//    const data = await payload.json();
//    return NextResponse.json(data);
//  } catch {
//    return NextResponse.json({ error: "Error fetching blog" }, { status: 500 });
//  }
//}
