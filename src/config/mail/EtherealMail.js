import nodemailer from "nodemailer";
import handlebarsMailTemplate from "./HandlebarsMailTemplate.js";

class EtherealMail {
  static async sendMail({ to, from, subject, templateData }) {
    console.log(templateData);
    const account = await nodemailer.createTestAccount();

    const mailTemplate = new handlebarsMailTemplate();

    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const message = await transporter.sendMail({
      from: {
        name: from.name || "Empresa",
        address: from.email || "empresa@gamestore.com",
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await mailTemplate.parse(templateData),
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
  }
}

export default EtherealMail;
