package by.gstu.itp.models.beans;

import by.gstu.itp.models.exceptions.NegativeIdException;
import org.junit.Test;

import static org.junit.Assert.*;

public class EntityBeanTest {

    @Test
    public void incorrectEntityIdTest() {
        assertThrows(NegativeIdException.class, () -> new Author(-5, "Ivanov"));
    }
}