package in.pool.server.domain.types;

public enum UserAccountTypes {
    EMAIL("101-001"), GOOGLE("101-002");

    private String account;

    UserAccountTypes(String account) {
        this.account = account;
    }

    public static UserAccountTypes getAccount(String account) {
        if (account == null) {
            return null;
        }

        for (UserAccountTypes acc : UserAccountTypes.values()) {
            if (account.equals(acc.getAccount())) {
                return acc;
            }
        }

        return null;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }
}
