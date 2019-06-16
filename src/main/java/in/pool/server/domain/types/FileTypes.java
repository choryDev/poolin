package in.pool.server.domain.types;

public enum FileTypes {
    RESUME("502-001"), ATTACHMENT("502-002");

    private String fileType;

    FileTypes(String fileType) {
        this.fileType = fileType;
    }

    public static FileTypes getFileType(String fileType) {
        if (fileType == null) {
            return null;
        }

        for (FileTypes ft : FileTypes.values()) {
            if (fileType.equals(ft.getFileType())) {
                return ft;
            }
        }

        return null;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }
}
