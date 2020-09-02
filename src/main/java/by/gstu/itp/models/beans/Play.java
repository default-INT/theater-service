package by.gstu.itp.models.beans;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "plays")
@Access(AccessType.FIELD)
public class Play {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private int id; //TODO: protected ??

    @Column
    private String name;
    @Column(name = "author_id", updatable = false, insertable = false)
    private int authorId;
    @Column(name = "genre_id", updatable = false, insertable = false)
    private int genreId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id", nullable = false)
    private Author author;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "genre_id")
    private Genre genre;

    public Play() {
    }

    public Play(int id, String title, Author author, Genre genre) {
        this.id = id;
        this.name = Objects.requireNonNull(title);
        this.author = Objects.requireNonNull(author);
        this.genre = Objects.requireNonNull(genre);
    }

    public Play(String name, Author author, Genre genre) {
        this(0, name, author, genre);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
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

    public void setAuthor(Author author) {
        this.author = author;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAuthorId(int authorId) {
        this.authorId = authorId;
    }

    public void setGenreId(int genreId) {
        this.genreId = genreId;
    }

    @Override
    public String toString() {
        return "Play{" +
                "id=" + getId() +
                ", title='" + name + '\'' +
                ", authorId=" + authorId +
                ", genreId=" + genreId +
                ", author=" + author +
                ", genre=" + genre +
                '}';
    }
}
