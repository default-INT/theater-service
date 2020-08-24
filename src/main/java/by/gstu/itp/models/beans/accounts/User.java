package by.gstu.itp.models.beans.accounts;

import by.gstu.itp.models.beans.EntityBean;
import by.gstu.itp.models.exceptions.PatternException;

import javax.persistence.*;
import java.util.Objects;
import java.util.regex.Pattern;

@Entity
@Table(name = "logins")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "roleId")
@DiscriminatorValue("3")
public class User extends EntityBean {
    /**
     * RegEx from check email. Example = "nick@mail.com"
     */
    private final static Pattern EMAIL_PATTERN =
            Pattern.compile("^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$");

    /**
     * RegEx from check phone number. Example = +375(29)817-47-53
     */
    private final static Pattern PHONE_PATTERN =
            Pattern.compile("^\\+\\d{3}\\(\\d{2}\\)\\d{3}-\\d{2}-\\d{2}$");

    @Column
    private final String name;
    @Column
    private final String password;
    @Column
    private final int roleId = getDefaultRole();
    @Column(unique = true)
    private final String email;
    @Column
    private final String phone;
    public User(int id, String name, String password, String email, String phone) {
        super(id);
        this.name = Objects.requireNonNull(name);
        this.password = Objects.requireNonNull(password);
        if (!EMAIL_PATTERN.matcher(email).find()) {
            throw new PatternException(email, EMAIL_PATTERN);
        }
        this.email = Objects.requireNonNull(email);
        if (!PHONE_PATTERN.matcher(phone).find()) {
            throw new PatternException(phone, PHONE_PATTERN);
        }
        this.phone = Objects.requireNonNull(phone);
    }

    protected int getDefaultRole() {
        return 3;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public int getRoleId() {
        return roleId;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }
}
