package in.pool.server.domain.types;

public enum SessionLayerTypes {

    ME("me"), WORKSPACE("ws"), PROJECT("project"), CARD("card");

    private String layer;

    SessionLayerTypes(String layer) {
        this.layer = layer;
    }

    public static SessionLayerTypes getLayerType(String layer) {
        if (layer == null) {
            return null;
        }

        for (SessionLayerTypes ly : SessionLayerTypes.values()) {
            if (layer.equals(ly.getLayer())) {
                return ly;
            }
        }

        return null;
    }

    public String getLayer() {
        return layer;
    }

    public void setLayer(String layer) {
        this.layer = layer;
    }
}
