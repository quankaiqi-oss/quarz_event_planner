import { NextResponse } from "next/server";

const requiredFields = ["fullName", "companyName", "email", "phone", "eventType", "eventDate", "details"] as const;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ message: "Submission rejected." }, { status: 400 });
  }
  for (const field of requiredFields) {
    if (typeof body[field] !== "string" || !body[field].trim()) {
      return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ message: "Please enter a valid business email." }, { status: 400 });
  }
  if (!process.env.CONTACT_DELIVERY_ENDPOINT) {
    return NextResponse.json({ message: "The inquiry form is ready, but email delivery is not configured yet. Add CONTACT_DELIVERY_ENDPOINT before accepting live submissions." }, { status: 503 });
  }
  return NextResponse.json({ message: "Inquiry received." });
}
