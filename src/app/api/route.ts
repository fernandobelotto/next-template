import { NextResponse } from "next/server";

// GET handler
export async function GET() {
	return NextResponse.json({ status: "success" });
}

// POST handler (if needed, otherwise remove this block)
export async function POST() {
	return NextResponse.json({
		status: "success",
		message: "POST method received",
	});
}
