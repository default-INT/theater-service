package by.gstu.itp.models.beans;

import java.util.Objects;

public class Play {
    private final int id;
    private final String title;
    private final int authorId;
    private final int genreId;

    public Play(int id, String title, int authorId, int genreId) {
        this.id = id;
        this.title = Objects.requireNonNull(title);
        this.authorId = authorId;
        this.genreId = genreId;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public int getAuthorId() {
        return authorId;
    }

    public int getGenreId() {
        return genreId;
    }
}
