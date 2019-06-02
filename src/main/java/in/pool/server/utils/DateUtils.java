package in.pool.server.utils;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Map;

public class DateUtils {
    DateUtils(){}

    public static DateUtils getInstance(){
        return new DateUtils();
    }

    /**
     * getting the started date.
     * @param {
     *     flg: String, (dd, 1w, 2w)
     *     started_date: String
     * }
     * @return
     */
    public String getStartedDate(Map map){
        DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String ended_date = (String)map.get("ended_date");
        String flg = (String)map.get("flg");
        Calendar started_date = Calendar.getInstance();
        try {
            started_date.setTime(sdf.parse(ended_date));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        if(ended_date == null || "".equals(ended_date)){
            return sdf.format(started_date);
        }

        if(flg == null || "".equals(flg)){
            flg = "dd";
        }

        switch (flg){
            case "1w":
                started_date.add(Calendar.DATE, -6);
                break;
            case "2w":
                started_date.add(Calendar.DATE, -13);
                break;
            case "1m":
                return String.valueOf(started_date.get(Calendar.YEAR) + "-" + (started_date.get(Calendar.MONTH) + 1) + "-01");
            case "2m":
                return String.valueOf(started_date.get(Calendar.YEAR) + "-" + (started_date.get(Calendar.MONTH)) + "-01");
            case "1y":
                return String.valueOf(started_date.get(Calendar.YEAR) + "-01-01");
        }
        return sdf.format(started_date.getTime());
    }

    /**
     * getting the ended date.
     * @param {
     *     flg: String, (dd, 1w, 2w, 1m, 2m)
     *     started_date: String
     * }
     * @return
     */
    public String getEndedDate(Map map){
        DateFormat sdf = new SimpleDateFormat("yyyy-M-dd");
        String ended_date = (String)map.get("ended_date");
        String flg = (String)map.get("flg");
        Calendar ended = Calendar.getInstance();

        try {
            ended.setTime(sdf.parse(ended_date));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        if(ended_date == null || "".equals(ended_date)){
            return sdf.format(ended);
        }

        if(flg == null || "".equals(flg)){
            flg = "dd";
        }

        switch (flg){
            case "1m":
                return String.valueOf(ended.get(Calendar.YEAR) + "-" + (ended.get(Calendar.MONTH) + 1) + "-31");
            case "2m":
                return String.valueOf(ended.get(Calendar.YEAR) + "-" + (ended.get(Calendar.MONTH) + 1) + "-31");
            case "1y":
                return String.valueOf(ended.get(Calendar.YEAR) + "-12-31");
        }
        return ended_date;
    }

}
