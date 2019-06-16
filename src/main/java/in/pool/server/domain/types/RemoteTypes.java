package in.pool.server.domain.types;

public enum  RemoteTypes {
    COMMUTE("504-001"), REMOTE("504-002");
    private String remote;

    RemoteTypes(String remote) {
        this.remote = remote;
    }

    public static RemoteTypes getRemote(String remote) {
        if (remote == null) {
            return null;
        }

        for (RemoteTypes rt : RemoteTypes.values()) {
            if (remote.equals(rt.getRemote())) {
                return rt;
            }
        }

        return null;
    }

    public String getRemote() {
        return remote;
    }

    public void setRemote(String remote) {
        this.remote = remote;
    }
}
