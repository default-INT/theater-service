package by.gstu.itp.models.beans.accounts;

import by.gstu.itp.models.beans.EntityBean;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "logins")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "roleId")
@DiscriminatorValue("3")
public class User extends EntityBean {
    @Column
    private final String name;
    @Column
    private final String password;
    @Column
    private final int roleId;
    @Column(unique = true)
    private final String email;
    @Column
    private final String phone;

    public User(int id, String name, String password, int roleId, String email, String phone) {
        super(id);
        this.name = Objects.requireNonNull(name);
        this.password = Objects.requireNonNull(password);
        this.roleId = roleId;
        this.email = Objects.requireNonNull(email);
        this.phone = Objects.requireNonNull(phone);
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
