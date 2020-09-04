package by.gstu.itp.models.exceptions;

import by.gstu.itp.models.beans.accounts.User;

public class LogInFailedException extends AccountAccessException {

    public LogInFailedException(User user) {
        super(user);
    }

    @Override
    protected String accountErrorMessage() {
        return ". LogIn failed from user=";
    }
}
