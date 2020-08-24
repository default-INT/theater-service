package by.gstu.itp.models.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "plays")
public class Play extends EntityBean {
    @Column
    private final String title;
    @Column
    private final int authorId;
    @Column
    private final int genreId;

    public Play(int id, String title, int authorId, int genreId) {
        super(id);
        this.title = Objects.requireNonNull(title);
        this.authorId = authorId;
        this.genreId = genreId;
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
