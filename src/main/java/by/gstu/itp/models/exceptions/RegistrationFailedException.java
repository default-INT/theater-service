package by.gstu.itp.models.exceptions;

import by.gstu.itp.models.beans.accounts.User;

public class RegistrationFailedException extends AccountAccessException {

    public RegistrationFailedException(User user) {
        super(user);
    }

    @Override
    protected String accountErrorMessage() {
        return ". Registration failed from user=";
    }
}
