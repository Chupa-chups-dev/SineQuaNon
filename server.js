const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/send-email', (req, res) => {
    res.status(405).send('Method Not Allowed');
});
app.post('/send-email', async (req, res) => {
    try {
        const { to, subject, text, phoneNumber, firstName, lastName, comment, email } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'mikhail.kroytor@gmail.com',
                pass: 'phajmsxxohkhxhkg'
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: 'mikhail.kroytor@gmail.com', // Замените на ваш адрес электронной почты Gmail
            to: 'mikhail.kroytor@gmail.com',
            subject: `Письмо с сайта Sine Qua Non от ${req.body.email}`,
            text: `
                Имя: ${req.body.firstName},
                Фамилия: ${req.body.lastName},
                E-mail: ${req.body.email},
                Телефон: ${req.body.phoneNumber},
                Сообщение: ${req.body.comment},
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.send('Email sent');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});