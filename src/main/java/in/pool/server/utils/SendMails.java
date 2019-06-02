package in.pool.server.utils;

import in.pool.server.utils.keys.EMAILS;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class SendMails {

    public interface CONTENTS{
        StringBuffer newContent(StringBuffer b);
    }

    private String EMAIL;

    private String TITLE;

    private StringBuffer CONTENT;

    private String CONTENT_TYPE = "text/html; charset=utf-8";

    public SendMails setEMAIL(String EMAIL){
        this.EMAIL = EMAIL;
        return this;
    }

    private String getEMAIL(){
        return this.EMAIL;
    }

    public SendMails setTITLE(String TITLE){
        this.TITLE = TITLE;
        return this;
    }

    private String getTITLE(){
        return this.TITLE;
    }

    public SendMails setCONTENT(CONTENTS content){
        StringBuffer buf = new StringBuffer();
        this.CONTENT = content.newContent(buf);
        return this;
    }

    private String getCONTENT(){
        if(this.CONTENT == null) this.CONTENT = new StringBuffer();
        return this.CONTENT.toString();
    }

    public SendMails setCONTENT_TYPE(String CONTENT_TYPE){
        this.CONTENT_TYPE = CONTENT_TYPE;
        return this;
    }

    private String getCONTENT_TYPE(){
        return this.CONTENT_TYPE;
    }

    private SendMails(){}

    public static SendMails getInstance(){
        return new SendMails();
    }

    public newMail send(){
        return new newMail(this);
    }

    class newMail{
        private static final String PROPERTY = "smtp.gmail.com";

        private SendMails instance;

        newMail(SendMails instance){
            this.instance = instance;
            send();
        }

        private void send(){
            Properties properties = System.getProperties();
            properties.put("mail.smtp.host", PROPERTY);
            properties.put("mail.smtp.socketFactory.port", 465);
            properties.put("mail.smtp.auth", true);
            properties.put("mail.smtp.starttls.required", true);
            properties.put("mail.smtp.starttls.enable", true);
            properties.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
            properties.put("mail.smtp.ssl.enable", "true");
            properties.put("mail.smtp.ssl.trust", PROPERTY);
            properties.put("mail.smtp.port", 465);


            Session session = Session.getDefaultInstance(properties, new Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(EMAILS.ID_FROM_EMAIL, EMAILS.PWD_FROM_EMAIL);
                }
            });

            try{
                // Create a default MimeMessage object.
                MimeMessage message = new MimeMessage(session);

                // Set From: header field of the header.
                message.setFrom(new InternetAddress(EMAILS.ID_FROM_EMAIL));

                // Set To: header field of the header.
                message.addRecipient(Message.RecipientType.TO, new InternetAddress(this.instance.getEMAIL()));

                // Set Subject: header field
                message.setSubject(this.instance.getTITLE());

                // Now set the actual message
                message.setContent(this.instance.getCONTENT(), this.instance.getCONTENT_TYPE());

                message.setSentDate(new java.util.Date());

                // Send message
                Transport.send(message);
            }catch (MessagingException e) {
                e.printStackTrace();
            }
        }
    }
}
