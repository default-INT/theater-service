package by.gstu.itp.models.beans.accounts;

import by.gstu.itp.models.beans.EntityBean;
import by.gstu.itp.models.exceptions.PatternException;
import com.google.gson.JsonObject;

import javax.persistence.*;
import java.util.Objects;
import java.util.regex.Pattern;

@Entity
@Table(name = "logins")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "role_id", discriminatorType = DiscriminatorType.INTEGER)
@DiscriminatorValue("1")
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
    private String name;
    @Column
    private String password;
    @Column(unique = true)
    private String email;
    @Column
    private String phone;
    @Column(name = "role_id", updatable = false, insertable = false)
    private int roleId;

    public User() {
    }

    /**
     *
     * @param id
     * @param name
     * @param password
     * @param email
     * @param phone
     */
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

    /**
     *
     * @param name
     * @param password
     * @param email
     * @param phone
     */
    public User(String name, String password, String email, String phone) {
        this(0, name, password, email, phone);
    }

    /**
     *
     * @param email
     * @param password
     */
    public User(String email, String password) {
        this(0, "undefined", password, email,
                "+375(00)000-00-00");
    }

    /**
     *
     * @param jsonObject
     */
    public User(JsonObject jsonObject) {
        this(
                jsonObject.get("id").getAsInt(),
                jsonObject.get("name").getAsString(),
                jsonObject.get("password") != null ? jsonObject.get("password").getAsString() : "undefined",
                jsonObject.get("email").getAsString(),
                jsonObject.get("phone").getAsString()
        );
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return name.equals(user.name) &&
                password.equals(user.password) &&
                email.equals(user.email) &&
                phone.equals(user.phone);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, password, email, phone);
    }

    @Override
    public String toString() {
        return "User{" +
                "id" + getId() +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
