package in.pool.server.domain.types;

public enum BelongTypes {

    PRIVATE("400-001"), PUBLIC("400-002");

    private String belong;

    BelongTypes(String belong) {
        this.belong = belong;
    }

    public static BelongTypes getBelong(String belong) {
        if (belong == null) {
            return null;
        }

        for (BelongTypes bl : BelongTypes.values()) {
            if (belong.equals(bl.getBelong())) {
                return bl;
            }
        }

        return null;
    }

    public String getBelong() {
        return belong;
    }

    public void setBelong(String belong) {
        this.belong = belong;
    }
}
