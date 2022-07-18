const { sendMail } = require("../config/mail");

const automatedMail = async(req, res) => {
    let {email, name} = req.body;
    
    try{
        await sendMail({
            to: email,
            subject: `${name} to the World!`,
            html: `<h4>Dear ${name}, this is an automated mail sent to you`
        })
    }catch(error){
        return res.status(200).json(error)
    }
    return res.status(200).json({message: "successfully sent mail"})
}

module.exports = automatedMail;