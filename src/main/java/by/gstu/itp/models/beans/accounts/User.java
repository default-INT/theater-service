package by.gstu.itp.models.beans.accounts;

import java.util.Objects;

public class User {
    private final int id;
    private final String name;
    private final String password;
    private final int roleId;
    private final String email;
    private final String phone;

    public User(int id, String name, String password, int roleId, String email, String phone) {
        this.id = id;
        this.name = Objects.requireNonNull(name);
        this.password = Objects.requireNonNull(password);
        this.roleId = roleId;
        this.email = Objects.requireNonNull(email);
        this.phone = Objects.requireNonNull(phone);
    }

    public int getId() {
        return id;
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
