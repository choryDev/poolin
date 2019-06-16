package in.pool.server.domain.types;

public enum  LangTypes {
    EN("en"), KR("kr");

    private String langType;

    LangTypes(String langType) {
        this.langType = langType;
    }

    public static LangTypes getLangType(String langType) {
        if (langType == null) {
            return null;
        }

        for (LangTypes tp : LangTypes.values()) {
            if (langType.equals(tp.getLangType())) {
                return tp;
            }
        }

        return null;
    }

    public String getLangType() {
        return langType;
    }

    public void setLangType(String langType) {
        this.langType = langType;
    }
}
