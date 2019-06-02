package in.pool.server.domain.types;

public enum AuthTypes {
    ONLY_VIEW("102-001"), WRTING("102-002"), APROVAL("102-003");

    private String auth;

    AuthTypes(String auth) {
        this.auth = auth;
    }

    public static AuthTypes getAuth(String authorization) {
        if (authorization == null) {
            return null;
        }

        for (AuthTypes auth : AuthTypes.values()) {
            if (authorization.equals(auth.getAuth())) {
                return auth;
            }
        }

        return null;
    }

    public String getAuth() {
        return auth;
    }

    public void setAuth(String auth) {
        this.auth = auth;
    }
}
