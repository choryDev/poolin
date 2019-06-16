package in.pool.server.domain.types;

public enum ProjectTypes {

    RECRUITING("501-001"), POOL("501-002");

    private String projectType;

    ProjectTypes(String projectType) {
        this.projectType = projectType;
    }

    public static ProjectTypes getProjectType(String projectType) {
        if (projectType == null) {
            return null;
        }

        for (ProjectTypes pt : ProjectTypes.values()) {
            if (projectType.equals(pt.getProjectType())) {
                return pt;
            }
        }

        return null;
    }

    public String getProjectType() {
        return projectType;
    }

    public void setProjectType(String projectType) {
        this.projectType = projectType;
    }
}
