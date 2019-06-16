package in.pool.server.domain.types;

public enum ServiceStatusTypes {
    ACTIVE("000-001"), ARCHIVE("000-002");

    private String status;

    ServiceStatusTypes(String status) {
        this.status = status;
    }

    public static ServiceStatusTypes getStatus(String status) {
        if (status == null) {
            return null;
        }

        for (ServiceStatusTypes st : ServiceStatusTypes.values()) {
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
