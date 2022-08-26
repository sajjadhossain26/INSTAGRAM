import nodemailer from 'nodemailer'

// send email form mailtrap
export const sendEmail = async (to, subject, text) => {

   try {
            let transport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: "developersajjad01@gmail.com",
                    pass: "fporfrghbyxjtald"
        }
        });

        await transport.sendMail({
            from: "sajjadhossainctg26@gmail.com",
            to: to,
            subject: subject,
            text: text
        })
   } catch (error) {
     console.log(error);
   }
}


