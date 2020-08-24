package by.gstu.itp.models.exceptions;

import java.util.regex.Pattern;

public class PatternException extends IllegalArgumentException {
    private final String mistakeValue;
    private final Pattern correctPattern;

    public PatternException(String mistakeValue, Pattern correctPattern) {
        this.mistakeValue = mistakeValue;
        this.correctPattern = correctPattern;
    }

    @Override
    public String getMessage() {
        return super.getMessage() + ". Value '" + mistakeValue +
                "' incorrect, the value must match the pattern - " + correctPattern;
    }

    public String getMistakeValue() {
        return mistakeValue;
    }

    public Pattern getCorrectPattern() {
        return correctPattern;
    }
}
