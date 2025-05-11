import * as nodemailer from 'nodemailer';

export async function sendEmail(to: string, creds: {login: string, password: string, ip: string}){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASS,
        }
    })

    await transporter.sendMail({
        from: `"Billing System" <${process.env.EMAIL_FROM}>`,
        to,
        subject: 'Your access',
        html: `
            <h2>Your date: </h2>
            <p><b>Login:</b> ${creds.login}</p>
            <p><b>Password:</b> ${creds.password}</p>
            <p><b>IP:</b> ${creds.ip}</p>
        `,
    });
}