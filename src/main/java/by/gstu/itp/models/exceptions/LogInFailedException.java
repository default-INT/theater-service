package by.gstu.itp.models.exceptions;

import by.gstu.itp.models.beans.accounts.User;

public class LogInFailedException extends RuntimeException {
    private final User user;

    public LogInFailedException(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    @Override
    public String getMessage() {
        return super.getMessage() + ". LogIn failed from user=" + user;
    }
}
