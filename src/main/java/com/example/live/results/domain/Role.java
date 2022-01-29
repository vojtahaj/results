package com.example.live.results.domain;

public enum Role {
    ADMIN(Names.ADMIN),
    USER(Names.USER);

    public class Names {
        public static final String ADMIN = "ADMIN";
        public static final String USER = "USER";
    }

    private final String label;

    Role(String label) {
        this.label = label;
    }

    private String toString(String label){
        return this.label;
    }
}
