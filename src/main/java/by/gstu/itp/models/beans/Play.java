package by.gstu.itp.models.beans;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "plays")
public class Play extends EntityBean {
    @Column
    private String title;
    @Column(name = "author_id")
    private int authorId;
    @Column(name = "genre_id")
    private int genreId;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author;
    @ManyToOne
    @JoinColumn(name = "genre_id")
    private Genre genre;
    @OneToMany(mappedBy = "play")
    private List<Date> dates;

    public Play() {
    }

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

    public Author getAuthor() {
        return author;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public List<Date> getDates() {
        return dates;
    }

    public void setDates(List<Date> dates) {
        this.dates = dates;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthorId(int authorId) {
        this.authorId = authorId;
    }

    public void setGenreId(int genreId) {
        this.genreId = genreId;
    }
}
