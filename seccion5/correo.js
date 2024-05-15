const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'angelvladimirdelcidrivera2@gmail.com',
        pass: 'xxxxxxxxxx'
    }
});

let email = {
    from: 'angelvladimirdelcidrivera@gmail.com',
    to: 'angelvladimirdelcidrivera2@gmail.com',
    subject: 'Implementación de servidor de correos',
    text: '¡Servidor de correo funcionando excelente!'
    
};

transporter.sendMail(mail, (error, info)=>{
    if (error) {
        console.log("Error sending email: ",error);
    } else {
        console.log("Correo enviado: ");
    }
});