const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

module.exports.sendEmail = function(options, callback){
    const html = options.html || '';
    const imageUrl = options.id ? process.env.URL + 'track/' + options.id: '';
    const imageTag = imageUrl ? `<img src="${imageUrl}.png" height="0" width="0">`: '';

    var mailOptions = {
        from: process.env.EMAIL,
        to: options.to,
        subject: options.subject,
        html: imageTag + html
    };

    console.log(mailOptions);

    transporter.sendMail(mailOptions, callback);
};
