package in.pool.server.domain.types;

public enum YesNoTypes {

    YES("Y"), NO("N");

    private String yesNo;

    YesNoTypes(String yesNo) {
        this.yesNo = yesNo;
    }

    public static YesNoTypes getYesNo(String yesNo) {
        if (yesNo == null) {
            return null;
        }

        for (YesNoTypes yn : YesNoTypes.values()) {
            if (yesNo.equals(yn.getYesNo())) {
                return yn;
            }
        }

        return null;
    }

    public String getYesNo() {
        return yesNo;
    }

    public void setYesNo(String yesNo) {
        this.yesNo = yesNo;
    }
}
