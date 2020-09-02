package by.gstu.itp.models.beans;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "plays")
@Access(AccessType.FIELD)
public class Play extends EntityBean {

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
    @OneToMany(mappedBy = "play")
    private Set<Date> dates;

    public Play() {
    }

    public Play(int id, String title, Author author, Genre genre) {
        super(id);
        this.name = Objects.requireNonNull(title);
        this.author = Objects.requireNonNull(author);
        this.genre = Objects.requireNonNull(genre);
    }

    public Play(String name, Author author, Genre genre) {
        this(0, name, author, genre);
    }

    public Set<Date> getDates() {
        return dates;
    }

    public void setDates(Set<Date> dates) {
        this.dates = dates;
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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Play play = (Play) o;
        return name.equals(play.name) &&
                author.equals(play.author) &&
                genre.equals(play.genre);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, author, genre);
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
