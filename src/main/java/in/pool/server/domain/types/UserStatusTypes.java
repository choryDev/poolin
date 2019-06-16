package in.pool.server.domain.types;

public enum UserStatusTypes {

    PENDING("100-001"), ACTIVE("100-002"), REJECTED("100-003"), TEST("100-004");

    private String status;

    UserStatusTypes(String status) {
        this.status = status;
    }

    public static UserStatusTypes getStatus(String status) {
        if (status == null) {
            return null;
        }

        for (UserStatusTypes st : UserStatusTypes.values()) {
            if (status.equals(st.getStatus())) {
                return st;
            }
        }

        return null;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
