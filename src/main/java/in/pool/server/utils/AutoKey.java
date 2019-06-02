package in.pool.server.utils;

import in.pool.server.service.CoreSpace;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

@Component
public class AutoKey extends CoreSpace {
    /**
     * 모듈별 시스템 키를 생성하여서 받아온다
     * @parameter : map
     * @return
     *
     * 날짜   : 2015-12-07
     * 생성자 : 최 인 준
     */
    @Scope(value = "prototype")
    public String makeGetKey(Map map) {
        String key = "";
        String strIssueDt = "";
        String strDashYn = "";

        int serialNo = 0;

        SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd");

        // null 일 경우, 오늘 날짜.
        strIssueDt = (String)map.get("ISSUE_DT");
        Date issueDt = new Date();
        try {
            issueDt = !((strIssueDt == null) || (("").equals(strIssueDt)))
                ? df.parse(strIssueDt): Calendar.getInstance().getTime();
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

        Map baseData = (Map)getItem("comm.autokey.getBaseKey", map);

        if (baseData == null) {
            throw new RuntimeException();
        }

        String preFix 		= String.valueOf(baseData.get("PRE_FIX")).replaceAll("null", "");
        int serialDigit 	= Integer.parseInt((baseData.get("SERIAL_DIGIT")).toString());
        String dateType		= (String)baseData.get("DATE_TP");
        String dateInfo		= "";
        String dateYn		= (String)baseData.get("DATE_YN");

        if(dateType !=null && !("").equals(dateType)){
            if(dateType.equals("YYYY")) {
                df = new SimpleDateFormat("yyyy");
                dateInfo = df.format(issueDt);
            }else if (dateType.equals("YYYYMM")) {
                df = new SimpleDateFormat("yyyyMM");
                dateInfo = df.format(issueDt);
            }else if (dateType.equals("YYYYMMDD")) {
                df = new SimpleDateFormat("yyyyMMdd");
                dateInfo = df.format(issueDt);
            }
        }

        if("Y".equals(dateYn)){
            map.put("DATE_INFO", dateInfo);
        }else{
            map.put("DATE_INFO", "");
        }


        if (baseData.get("DASH_YN") == null) {
            strDashYn = "N";
        } else {
            strDashYn = baseData.get("DASH_YN").toString();
        }
        Map baseDtl = (Map)getItem("comm.autokey.getKey", map);

        if (baseDtl != null && baseDtl.size() > 0) {
            serialNo = Integer.parseInt((baseDtl.get("SERIAL_NO")).toString()) + 1;
        } else {
            serialNo = 1;
        }

        map.put("NEXT_NO", Integer.toString(serialNo));

        if (baseDtl != null && baseDtl.size() > 0) {
            updateObject("comm.autokey.updateKey", map);
        } else {
            insertObject("comm.autokey.insertKey", map);
        }

        if((strDashYn.trim()).equals("Y")){
            if("Y".equals(dateYn)){
                key = preFix + dateInfo + "-" + makeNumString((serialNo), serialDigit);
            }else{
                key = preFix + "-" +  makeNumString((serialNo), serialDigit);
            }

        }else{
            if("Y".equals(dateYn)){
                key = preFix + dateInfo + makeNumString((serialNo), serialDigit);
            }else{
                key = preFix + makeNumString((serialNo), serialDigit);
            }

        }

        return key;
    }

    private String makeNumString(int intValue, int iByte) {
        String spaceStr = fill("0", iByte);

        return rightBytes(spaceStr + intValue, iByte);
    }

    /**
     * 지정한 문자열로 지정한 길이만큼 반복해서 채운다.
     * @param strPattern
     * @param iLen
     * @return
     * fill("#", 5) return : "#####"
     * fill("abc", 7) return : "abcabca"
     * fill("abc", 2) return : "ab"
     */
    private static String fill(String strPattern, int iLen){
        StringBuffer sb = new StringBuffer();

        if( strPattern == null){
            return null;
        }else if(strPattern.equals("") || iLen < 0){
            return "";
        }else{
            for(int i = 0; i < iLen; i = i + strPattern.length()){
                sb.append(strPattern);
            }
        }

        return sb.substring(0, iLen);
    }

    /**
     * byte체크
     * @param strValue
     * @param iByte
     * @return
     */
    private static String rightBytes(String strValue, int iByte) {
        byte[] result = null;

        if(strValue == null){
            return null;
        }else if(strValue.equals("") || iByte < 0){
            return new String("");
        }else{
            byte[] source = strValue.getBytes();

            if(source.length < iByte){
                return new String(strValue);
            }else{
                result = new byte[iByte];
                System.arraycopy(source, source.length - iByte, result, 0, iByte);
                return new String(result);
            }
        }
    }
}