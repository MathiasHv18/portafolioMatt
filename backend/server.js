import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.NUMBER_PORT || 3000;

app.post("/send-email", (req, res) => {
  const { name, phone, message, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.FINAL_EMAIL_USER,
    subject: `Mensaje de ${name}`,
    text: `Nombre: ${name}, Teléfono: ${phone}, email: ${email}, Mensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    } else {
      console.log("Email enviado: " + info.response);
      res.status(200).send("Email enviado");
    }
  });
});

app.get("/download", (req, res) => {
  const file = "../src/assets/ResumeHualtibamba.docx";
  res.download(file);
});

app.listen(port, () => {
  console.log(`Servidor en puerto X`);
});
