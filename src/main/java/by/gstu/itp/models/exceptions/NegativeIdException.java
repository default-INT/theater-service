package by.gstu.itp.models.exceptions;

public class NegativeIdException extends RuntimeException {
    private final int id;

    public NegativeIdException(int id) {
        this.id = id;
    }

    public NegativeIdException(Throwable cause, int id) {
        super(cause);
        this.id = id;
    }

    @Override
    public String getMessage() {
        return super.getMessage() + ".Id = " + id;
    }
}
