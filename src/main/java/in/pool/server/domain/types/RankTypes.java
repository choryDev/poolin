package in.pool.server.domain.types;

public enum RankTypes {

    VERY_POOR("503-001"), POOR("503-002"), NUETRAL("503-003"), GOOD("503-004"), VERY_GOOD("503-005");

    private String rank;

    RankTypes(String rank) {
        this.rank = rank;
    }

    public static RankTypes getRank(String rank) {
        if (rank == null) {
            return null;
        }

        for (RankTypes r : RankTypes.values()) {
            if (rank.equals(r.getRank())) {
                return r;
            }
        }

        return null;
    }

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
    }
}
