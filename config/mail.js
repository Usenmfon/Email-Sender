const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "imayreact@gmail.com",
        pass: "syphqhoomnhgoaga",
        type: "SMTP",
        host: "smtp.gmail.com",
        secure: true,
    }
})

exports.sendMail = function (data) {
    return transporter.sendMail({...data, from: "Big Chief"});
}