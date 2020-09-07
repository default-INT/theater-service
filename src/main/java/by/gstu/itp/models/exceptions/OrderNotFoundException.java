package by.gstu.itp.models.exceptions;

public class OrderNotFoundException extends NullPointerException {
    public OrderNotFoundException() {
    }

    public OrderNotFoundException(String s) {
        super(s);
    }
}
