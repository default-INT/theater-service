package by.gstu.itp.models.beans.accounts;

import by.gstu.itp.models.exceptions.PatternException;
import org.junit.Test;

import static org.junit.Assert.*;

public class UserTest {

    @Test
    public void incorrectEmailAccountTest() {
        assertThrows(PatternException.class, () -> new Admin(1, "I.V. Ivanov",
                "fdsf2144xsc", "email", "+375(29)817-47-53"));
    }

    @Test
    public void incorrectPhoneNumberAccountTest() {
        assertThrows(PatternException.class, () -> new Admin(1, "I.V. Ivanov",
                "fdsf2144xsc", "email", "817-47-53"));
    }
}