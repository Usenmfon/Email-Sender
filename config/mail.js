const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
        type: "SMTP",
        host: "smtp.gmail.com",
        secure: true,
    }
})

exports.sendMail = function (data) {
    return transporter.sendMail({...data, from: ""});
}