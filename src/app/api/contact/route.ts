import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    let name = "";
    let email = "";
    let message = "";
    let company = "";
    let budget = "";
    let timeline = "";
    let fileInfo = "";

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      // Handle JSON request (no file upload)
      const body = await req.json();
      name = body.name || "";
      email = body.email || "";
      message = body.message || "";
    } else if (contentType.includes("multipart/form-data")) {
      // Handle FormData request (with optional file upload)
      const formData = await req.formData();
      name = formData.get("name")?.toString() || "";
      email = formData.get("email")?.toString() || "";
      message = formData.get("message")?.toString() || "";
      company = formData.get("company")?.toString() || "";
      budget = formData.get("budget")?.toString() || "";
      timeline = formData.get("timeline")?.toString() || "";

      const file = formData.get("file") as File | null;
      if (file) {
        const buffer = Buffer.from(await file.arrayBuffer());
        fileInfo = `<p><strong>Attached File:</strong> ${file.name} (${file.size} bytes)</p>`;
        // If you want to send file via email, use nodemailer attachments (see note below)
      }
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USERNAME,
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company && `<p><strong>Company:</strong> ${company}</p>`}
        ${budget && `<p><strong>Budget:</strong> ${budget}</p>`}
        ${timeline && `<p><strong>Timeline:</strong> ${timeline}</p>`}
        <p><strong>Message:</strong><br>${message}</p>
        ${fileInfo}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
