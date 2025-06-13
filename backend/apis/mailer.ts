import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

export const sendEmail = async (to: string, subject:string, message: string) => {
    try {
        await transporter.sendMail({
            to: to,
            from: process.env.EMAIL_USER,
            subject: subject,
            text: message,
        })} catch (error) {
        console.log(error)
    }
};