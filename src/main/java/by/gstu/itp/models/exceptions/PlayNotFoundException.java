package by.gstu.itp.models.exceptions;

public class PlayNotFoundException extends NullPointerException {
    public PlayNotFoundException() {
    }

    public PlayNotFoundException(String s) {
        super(s);
    }
}
