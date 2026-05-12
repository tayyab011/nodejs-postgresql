import nodemailer from "nodemailer";

const EmailSend = async (EmailTo, EmailText, EmailSubject, EmailHTMLBody) => {
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: "tayyabmd00001@gmail.com", pass: "qbos oawe npgz edgc" },
    tls: { rejectUnauthorized: false },
  });

  let mailOption = {
    from: "Task Management App  <tayyabmd00001@gmail.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transport.sendMail(mailOption);
};
export default EmailSend;
