package in.pool.server.domain.types;

public enum CardUsedTypes {
    WILL_USE("300-001"), DONE("300-002");

    private String used;

    CardUsedTypes(String used) {
        this.used = used;
    }

    public static CardUsedTypes getUsed(String used) {
        if (used == null) {
            return null;
        }

        for (CardUsedTypes u : CardUsedTypes.values()) {
            if (used.equals(u.getUsed())) {
                return u;
            }
        }

        return null;
    }

    public String getUsed() {
        return used;
    }

    public void setUsed(String used) {
        this.used = used;
    }
}
