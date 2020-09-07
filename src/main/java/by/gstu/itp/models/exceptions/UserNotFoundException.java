package by.gstu.itp.models.exceptions;

public class UserNotFoundException extends NullPointerException {
    public UserNotFoundException() {
    }

    public UserNotFoundException(String s) {
        super(s);
    }
}
