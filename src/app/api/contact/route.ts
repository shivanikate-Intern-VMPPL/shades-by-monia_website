import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, budget, location, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In production: Connect to Resend, SendGrid, or Nodemailer
    // Example:
    // await resend.emails.send({
    //   from: 'inquiry@shadesbymonia.com',
    //   to: 'concierge@shadesbymonia.com',
    //   subject: `New Project Inquiry from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p>...`
    // });

    console.log("New Project Brief Received at Shades by Monia:", {
      name,
      email,
      phone,
      projectType,
      budget,
      location,
      timeline,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project brief has been received. Our concierge will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while transmitting your brief." },
      { status: 500 }
    );
  }
}
