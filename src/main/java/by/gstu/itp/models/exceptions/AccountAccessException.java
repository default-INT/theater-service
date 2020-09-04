package by.gstu.itp.models.exceptions;

import by.gstu.itp.models.beans.accounts.User;

public class AccountAccessException extends RuntimeException {
    private final User user;

    public AccountAccessException(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    protected String accountErrorMessage() {
        return ". Account access fail=";
    }

    @Override
    public String getMessage() {
        return super.getMessage() + accountErrorMessage() + user;
    }
}
