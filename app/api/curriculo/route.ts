import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_PDF_BYTES = 10 * 1024 * 1024;

export const runtime = "nodejs";

export async function POST(request: Request) {
  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  const to = process.env.SMTP_TO || user;

  if (!user || !pass || !from || !to) {
    return NextResponse.json({ error: "O envio de e-mail ainda não está configurado." }, { status: 500 });
  }

  const incoming = await request.formData();
  const nome = String(incoming.get("nome") ?? "").trim();
  const whatsapp = String(incoming.get("whatsapp") ?? "").trim();
  const area = String(incoming.get("area") ?? "").trim();
  const file = incoming.get("curriculo");

  if (!nome || !whatsapp || !area) {
    return NextResponse.json({ error: "Preencha nome, WhatsApp e área." }, { status: 400 });
  }

  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Anexe o currículo em PDF." }, { status: 400 });
  }

  if (file.type !== "application/pdf") {
    return NextResponse.json({ error: "O currículo deve estar em PDF." }, { status: 400 });
  }

  if (file.size > MAX_PDF_BYTES) {
    return NextResponse.json({ error: "O PDF deve ter no máximo 10 MB." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const content = Buffer.from(await file.arrayBuffer());

  try {
    await transporter.sendMail({
      from,
      to,
      subject: `Nova candidatura — ${nome} (${area})`,
      text: [
        "Nova candidatura pelo site.",
        "",
        `Nome: ${nome}`,
        `WhatsApp: ${whatsapp}`,
        `Área: ${area}`,
        `Arquivo: ${file.name}`,
      ].join("\n"),
      attachments: [
        {
          filename: file.name.endsWith(".pdf") ? file.name : `${file.name}.pdf`,
          content,
          contentType: "application/pdf",
        },
      ],
    });
  } catch {
    return NextResponse.json({ error: "Não foi possível enviar o currículo. Tente novamente." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
