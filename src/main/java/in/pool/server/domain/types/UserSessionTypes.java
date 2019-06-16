package in.pool.server.domain.types;

public enum UserSessionTypes {

    WEB("W"), ANDROID("A"), IOS("I");

    private String session;

    public static UserSessionTypes getSession(String session) {
        if (session == null) {
            return null;
        }

        for (UserSessionTypes sess : UserSessionTypes.values()) {
            if (session.equals(sess.getSession())) {
                return sess;
            }
        }

        return null;
    }

    UserSessionTypes(String session) {
        this.session = session;
    }

    public String getSession() {
        return session;
    }

    public void setSession(String session) {
        this.session = session;
    }
}
