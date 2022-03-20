const { Router } = require('express')
const nodemailer = require('nodemailer')

const router = Router();
router.post('/send-email', async(req, res) => {
    const { name, email, phone, message } = req.body;
    contentHtml = `
        <h1>User Information</h1>
        <ul>
            <li>Username : ${name}</li>
            <li>Email : ${email}</li>
            <li><a>Phone : ${phone}</a></li>
            
        </ul>
        <p>${message}</p>
    `;
    const transport = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
            user: 'barrolleta@snipper.store',
            pass: 'M3lonn_2121'
        }
    })
    const info = await transport.sendMail({
        from: "'Snipper Maestro de costura <barrolleta@snipper.store>'",
        to: 'thesastre.2019@gmail.com,luisbarr_19@outlook.com',
        subject: 'Website Contact Form',
        // text: 'hello world'
        html: contentHtml
    });
    console.log('Message sent', info.messageId);
    res.redirect('/success.html')
        // res.send('received')
})
module.exports = router;