package in.pool.server.utils.crypt;

import javax.crypto.Cipher;
import java.math.BigInteger;
import java.security.*;
import java.security.spec.RSAPublicKeySpec;
import java.util.Vector;

public class RSAsymmetry {

    private static PublicKey PUBLIC_KEY;
    private static PrivateKey PRIVATE_KEY;
    private static String publicKey;
    private static BigInteger publicModuls;
    private static BigInteger publicExponent;

    public RSAsymmetry(){
		/*
		 *  1. 키는 전역으로 관리.
		 *  2. 키가 하나라도 null일 경우 공개키를 다시 생성한다.
		 */
        if(PUBLIC_KEY == null || PRIVATE_KEY == null){
            KeyPair keyPair = null;

            KeyPairGenerator kpg;
            try {
                kpg = KeyPairGenerator.getInstance(AuthKey.ENCRYT_TYPE);
                kpg.initialize(AuthKey.KEY_LENGTH);
                keyPair = kpg.generateKeyPair();
            } catch (NoSuchAlgorithmException e) {
                e.printStackTrace();
            }
            if(keyPair == null){
                return;
            }

            PRIVATE_KEY = keyPair.getPrivate();
            PUBLIC_KEY  = keyPair.getPublic();
            KeyFactory keyFactory;
            RSAPublicKeySpec publicSpec;
            try {
                keyFactory = KeyFactory.getInstance("RSA");
                publicSpec = keyFactory.getKeySpec(this.PUBLIC_KEY, RSAPublicKeySpec.class);
                this.publicModuls = publicSpec.getModulus();
                this.publicExponent = publicSpec.getPublicExponent();
                this.publicKey = getPubKey();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * convert Public Key to String
     * @param
     * @return String Public Key
     */
    public String getPubKey(){
        StringBuffer bf = new StringBuffer();
        KeyFactory keyFactory;
        RSAPublicKeySpec publicSpec;
        try {
            keyFactory = KeyFactory.getInstance("RSA");
            publicSpec = keyFactory.getKeySpec(this.PUBLIC_KEY, RSAPublicKeySpec.class);
            bf.append(publicSpec.getModulus());
            bf.append(" ");
            bf.append(publicSpec.getPublicExponent());
        }catch(Exception e){

        }
        return bf.toString();
    }

    public String getPublicKey(){
        return this.publicKey;
    }

    /**
     * get Public Key Moduls of Public Key
     * @param
     * @return BigInteger
     */
    public BigInteger getPubModuls (){
        return this.publicModuls;
    }

    /**
     * get Public key Exponents of Public Key
     * @param
     * @return BigInteger
     */
    public BigInteger getPubExponents(){
        return this.publicExponent;
    }

    /**
     * 2015-12-17
     * make RSA Encrypt Message	with Public Key
     * @param msg
     * @return String Msg
     */
    public String RSAEncode_Public(String msg){

        return abstractEncode(msg, PUBLIC_KEY);
    }

    /**
     * make RSA Encrypt Message	with Private Key
     * @param msg
     * @return String Msg
     */
    public String RSAEncode_Private(String msg){
        return abstractEncode(msg, PRIVATE_KEY);
    }

    /**
     * make RSA DeEncrypt Message	with Public Key
     * @param msg
     * @return String Msg
     */
    public String RSADecode_PublicKey(String msg, PublicKey publicKey){
        return abstractDeEncode(msg, publicKey);
    }

    /**
     * make RSA DeEncrypt Message	with Private Key
     * @param msg
     * @return String Msg
     */
    public String RSADecode_PrivateKey(String msg){
        return abstractDeEncode(msg, PRIVATE_KEY);
    }

    private String abstractEncode(String msg, Object key){
        byte[] msgArray = msg.getBytes();
        Cipher cipher;
        try {
            cipher = Cipher.getInstance(AuthKey.ENCRYT_TYPE);
            if(key instanceof PrivateKey){
                cipher.init(Cipher.ENCRYPT_MODE, (PrivateKey)key);
            }else if(key instanceof PublicKey){
                cipher.init(Cipher.ENCRYPT_MODE, (PublicKey)key);
            }
            Vector arrayList = new Vector();
            int totalSize = 0;
            for (int i = 0; i < msgArray.length; i += AuthKey.MSG_BLOCK_LENGTH){
                int size = Math.min(AuthKey.MSG_BLOCK_LENGTH, msgArray.length - i);
                byte[] temp = new byte[size];
                System.arraycopy(msgArray, i, temp, 0, size);
                byte[] encedMsg = cipher.doFinal(temp);
                arrayList.addElement(encedMsg);
                totalSize += encedMsg.length;
            }
            byte[] totalArray = new byte[totalSize];
            int offset = 0;
            for (int i = 0; i < arrayList.size(); i++){
                byte[] tempArray = (byte[])arrayList.elementAt(i);
                System.arraycopy(tempArray, 0, totalArray, offset, tempArray.length);
                offset += tempArray.length;
            }
            return makeStrKey(totalArray, -1);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    private String abstractDeEncode(String msg, Object key){
        int[] intArray = StrToInt(msg, -1);
        byte[] msgArray = intTobyte(intArray);
        try {
            Cipher cipher = Cipher.getInstance(AuthKey.ENCRYT_TYPE);
            if(key instanceof PrivateKey){
                cipher.init(Cipher.DECRYPT_MODE, (PrivateKey)key);
            }else if(key instanceof PublicKey){
                cipher.init(Cipher.DECRYPT_MODE, (PublicKey)key);
            }
            Vector arrayList = new Vector();
            int totalSize = 0;
            for (int i = 0; i < msgArray.length; i += AuthKey.ENCRYPTED_MSG_LENGTH)
            {
                byte[] temp = new byte[AuthKey.ENCRYPTED_MSG_LENGTH];
                System.arraycopy(msgArray, i, temp, 0, AuthKey.ENCRYPTED_MSG_LENGTH);
                byte[] decedMsg = cipher.doFinal(temp);
                arrayList.addElement(decedMsg);
                totalSize += decedMsg.length;
            }
            byte[] totalArray = new byte[totalSize];
            int offset = 0;
            for (int i = 0; i < arrayList.size(); i++)
            {
                byte[] tempArray = (byte[])arrayList.elementAt(i);
                System.arraycopy(tempArray, 0, totalArray, offset, tempArray.length);
                offset += tempArray.length;
            }
            return new String(totalArray);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    private String makeStrKey(byte bytes[], int arraySize){
        StringBuffer bf = new StringBuffer();
        if (arraySize > 0){
            int noOfZero = arraySize - bytes.length;
            for (int i = 0; i < noOfZero; i++) bf.append("00");
        }
        for(int i=0; i<bytes.length; i++){
            if((bytes[i] > 15) || (bytes[i] < 0))
                bf.append(Integer.toHexString(bytes[i] & 0xff));
            else
                bf.append("0" + Integer.toHexString(bytes[i] & 0xff));
        }
        return bf.toString();
    }

    private int[] StrToInt(String src, int arraySize){
        int[] dst;
        if (arraySize > 0){
            dst = new int[arraySize];
            int noOfZero = arraySize - (src.length() / 2);
            for (int i = 0; i < noOfZero; i++) dst[i] = 0x00;
            for (int i = noOfZero; i < dst.length; i++){
                char first = src.charAt(i * 2);
                char second = src.charAt(i * 2 + 1);
                dst[i] = hex2int(first) * 16 + hex2int(second);
            }
        }else{
            dst = new int[src.length() / 2];
            for (int i = 0; i < dst.length; i++){
                char first = src.charAt(i * 2);
                char second = src.charAt(i * 2 + 1);
                dst[i] = hex2int(first) * 16 + hex2int(second);
            }
        }
        return dst;
    }

    private static int hex2int(char src){
        if(src >= '0' && src <= '9') return ((int)src - (int)'0');
        else if(src >= 'a' && src <= 'f') return ((int)src - (int)'a' + 10);
        else if(src >= 'A' && src <= 'F') return ((int)src - (int)'A' + 10);
        else throw new NumberFormatException();
    }

    private static byte[] intTobyte(int[] src){
        byte[] dst = new byte[src.length];
        for (int i = 0; i < src.length; i++)
            dst[i] = (byte)src[i];
        return dst;
    }

    // 공개키 및 개인키 생성.
    private static KeyPair getRandomKeyPair(int keyLength){
        SecureRandom sr =new SecureRandom();
        sr.nextInt();

        KeyPairGenerator kpg;
        try {
            kpg = KeyPairGenerator.getInstance(AuthKey.ENCRYT_TYPE);
            kpg.initialize(keyLength, sr);
            KeyPair kp = kpg.generateKeyPair();
            return kp;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }
}