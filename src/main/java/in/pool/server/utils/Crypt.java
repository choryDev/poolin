package in.pool.server.utils;


import in.pool.server.utils.crypt.RSAsymmetry;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.util.Base64;

public class Crypt {

    private static RSAsymmetry rsa;

    Crypt (){}

    public static Crypt newCrypt(){
        return new Crypt();
    }

    public void setRsa(RSAsymmetry rsa){
        this.rsa = rsa;
    }

    public String getPublicKey(){
        return this.rsa.getPublicKey();
    }

    public BigInteger getPubModuls(){
        return this.rsa.getPubModuls();
    }

    public BigInteger getPubExponents(){
        return this.rsa.getPubExponents();
    }

    public String encryptMsgWithPrivateKey(String msg){
        return rsa.RSAEncode_Private(msg);
    }

    public String encryptMsgWithPublicKey(String msg){
        return rsa.RSAEncode_Public(msg);
    }

    public String decryptMsgWithPrivateKey(String msg){
        return rsa.RSADecode_PrivateKey(msg);
    }

    public String decryptMsgWithPublicKey(String msg, PublicKey pk){
        return rsa.RSADecode_PublicKey(msg, pk);
    }

    public RSAsymmetry getRsa(){
        return this.rsa;
    }

    public String getPassword(String msg, String salt){
        PBEKeySpec spec = new PBEKeySpec(msg.toCharArray(), salt.getBytes(), 10, 512);
        SecretKeyFactory skf;
        byte[] hash = null;
        try {
            skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
            hash = skf.generateSecret(spec).getEncoded();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new String(Base64.getEncoder().encode(hash));
    }

    /**
     * if length is 1, default lenght of return value is 10
     */
    public String getSalt(int length){
        try {
            SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
            byte[] salt = new byte[length];
            secureRandom.nextBytes(salt);
            byte[] encoded = Base64.getEncoder().encode(salt);
            return new String(encoded);
        } catch(Exception e) {
            e.printStackTrace();
        }
        return new String("");
    }

    /**
     * make SHA-256
     * @param msg
     * @return String
     */
    public String getAuthKey(String msg){
        String value = "";

        SecretKeyFactory skf;
        byte[] hash = null;
        try {
            SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
            // Salt generation 128 bits long
            byte[] salt = new byte[256];
            secureRandom.nextBytes(salt);
            value = salt.toString();
            PBEKeySpec spec = new PBEKeySpec(msg.toCharArray(), value.getBytes(), 10, 512);
            skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
            hash = skf.generateSecret(spec).getEncoded();
        } catch(Exception e) {
            e.printStackTrace();
        }

        return new String(Base64.getEncoder().encode(hash));
    }

    public String SHA256(String msg){
        StringBuffer sb = new StringBuffer();
        String data = "";
        try{
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(msg.getBytes());
            byte[] mdBytes = md.digest();
            data = byteAsString(mdBytes);
            return data;
        }catch (Exception localNoSuchAlgorithmException) {

        }
        return data;
    }

    private String byteAsString(byte[] dataBytes) throws Exception {
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < dataBytes.length; i++) {
            String hex = Integer.toHexString(0xFF & dataBytes[i]);
            if (hex.length() == 1) sb.append('0');
            sb.append(hex);
        }
        return sb.toString();
    }
}