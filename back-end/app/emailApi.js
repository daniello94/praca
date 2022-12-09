const express = require('express');
const router = express.Router();
const email = require('./controller/email.controller');
nodeMailer = require('nodemailer'),


    router.post('/add', function (req, res) {
        email.add(req.body, function (err, email) {
            if (err) {
                res.status(404);
                res.json({
                    error: "Email is nor create "
                })
            } else {
                res.json(email)

                let messageHtml =
                    `<!DOCTYPE html>
                <html lang="pl">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <h5>Witam<h5>
                        <p>Związku z otrzymaniem wiadomości od ${email.dataClient.emailNameClient}, który napisał/a:</p>
                        <p>${email.dataClient.emailMessageClient}</p>
                        <p> nasza odpowiedź na państwa zapytanie brzmi następująco:</p>
                        <p>${email.dataEmployee.emailMessage}</p>
                        <p>W razie jakich dodatkowych pytań prosimy o kontakt :</p>
                        <p>${email.dataEmployee.emailName}</p>
                        <p>Numer Telefonu : ${email.dataEmployee.emailPhoneNumber}</p>
                        <p>adres email: ${email.dataEmployee.email}</p>
                        <p>Uprzejmie informujemy ,że będziemy się kontaktować na podany numer telefonu tj. ${email.dataClient.emailPhoneNUmberClient}<p>
                        <p>Z poważaniem </p>
                        <p> ${email.dataEmployee.emailName}</p>
                        <h3>Jest to przykładowa wiadomość </h3>
                    </body>
                </html>`

                process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";

                let transporter = nodeMailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: process.env.ADDRESS_EMAIL,
                        pass: process.env.EMAIL_PASSWORD
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });

                let mailOptions = {
                    to: email.dataClient.emailClient,
                    from: "<wiad@op.pl>",
                    subject: `Nowa wiadomość`,
                    html: messageHtml,
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message %s sent: %s', info.messageId, info.response);
                    res.json("wysłano");
                })
            }
        })
    })
module.exports = router