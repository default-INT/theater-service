package by.gstu.itp.models.beans;

import by.gstu.itp.models.beans.accounts.User;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "orders")
@Access(AccessType.FIELD)
public class Order extends EntityBean {
    private static final BigDecimal DEFAULT_PRICE = BigDecimal.valueOf(6);

    private enum TicketCategory {
        CHEAP_TICKET(0.9),
        DEFAULT_TICKET(1),
        EXPENSIVE_TICKET(1.2);

        private final double discount;

        TicketCategory(double discount) {
            if (discount < 0) {
                throw new IllegalArgumentException();
            }
            this.discount = discount;
        }

        public double getDiscount() {
            return discount;
        }
    }

    @Column(name = "row_id")
    private int row;
    @Column
    private int seat;
    @Column(name = "user_id", insertable = false, updatable = false)
    private int userId;
    @Column(name = "date_id", insertable = false, updatable = false)
    private int dateId;
    @Column
    private BigDecimal price;
    @Enumerated(EnumType.STRING)
    @Column(name = "ticket_category")
    private TicketCategory ticketCategory;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "date_id")
    private Date date;

    public Order() {}

    public Order(int id, int row, int seat, User user, Date date) {
        super(id);
        if (row <= 0) {
            throw new IllegalArgumentException();
        }
        if (seat <= 0) {
            throw new IllegalArgumentException();
        }
        this.row = row;
        this.seat = seat;
        this.user = Objects.requireNonNull(user);
        this.date = Objects.requireNonNull(date);
        this.ticketCategory = TicketCategory.valueOf(Hall.getInstance().getTicketType(row));
        this.price = DEFAULT_PRICE.multiply(BigDecimal.valueOf(ticketCategory.getDiscount()));
    }

    /**
     *
     * @param row
     * @param seat
     * @param user
     * @param date
     */
    public Order(int row, int seat, User user, Date date) {
        this(0, row, seat, user, date);
    }

    public int getDateId() {
        return dateId;
    }

    public void setDateId(int dateId) {
        this.dateId = dateId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = Objects.requireNonNull(date);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = Objects.requireNonNull(user);
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getSeat() {
        return seat;
    }

    public void setSet(int seat) {
        this.seat = seat;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        if (BigDecimal.valueOf(0).compareTo(price) < 0) {
            throw new IllegalArgumentException();
        }
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Order order = (Order) o;
        return row == order.row &&
                seat == order.seat &&
                date.equals(order.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(row, seat, userId, dateId, price, ticketCategory, user, date);
    }

    @Override
    public String toString() {
        return "Order{" +
                "row=" + row +
                ", seat=" + seat +
                ", userId=" + userId +
                ", dateId=" + dateId +
                ", price=" + price +
                ", ticketCategory=" + ticketCategory +
                ", user=" + user +
                ", date=" + date +
                '}';
    }
}
