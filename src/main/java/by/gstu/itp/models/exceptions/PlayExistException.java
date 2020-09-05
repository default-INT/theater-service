package by.gstu.itp.models.exceptions;

import java.time.LocalDate;

public class PlayExistException extends IllegalArgumentException {
    private final LocalDate localDate;
    private final int playId;

    public PlayExistException(LocalDate localDate, int playId) {
        this.localDate = localDate;
        this.playId = playId;
    }

    public LocalDate getLocalDate() {
        return localDate;
    }

    public int getPlayId() {
        return playId;
    }

    @Override
    public String getMessage() {
        return super.getMessage() + ". Date exist in database for this play with id = " + playId;
    }
}
