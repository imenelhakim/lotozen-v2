const nodemailer =  require("nodemailer");
require('dotenv').config();

let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST ,
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },
});
function sendmail(mailOptions){
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("[ERROR WHILE SENDING MAIL !]");
            console.log('[MAIL ERROR] - ' + error);
        } else {
            console.log("[MAIL SUCCESSFULLY SENT !]");
            console.log('[MAIL INFO] - ' + info.response);
        }
    });
}
module.export = sendmail;
