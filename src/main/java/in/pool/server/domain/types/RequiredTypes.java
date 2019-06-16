package in.pool.server.domain.types;

// COM_PRJT_MST
public enum RequiredTypes {
    REQUIRED("500-001"), OPTIONAL("500-002"), DISABLE("500-003");

    private String required;

    RequiredTypes(String required) {
        this.required = required;
    }

    public static RequiredTypes getRequired(String required) {
        if (required == null) {
            return null;
        }

        for (RequiredTypes rt : RequiredTypes.values()) {
            if (required.equals(rt.getRequired())) {
                return rt;
            }
        }

        return null;
    }

    public String getRequired() {
        return required;
    }

    public void setRequired(String required) {
        this.required = required;
    }
}
