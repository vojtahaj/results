package com.example.live.results.web.websocket;

import java.security.Principal;

public class WsUser implements Principal {
    private final String name;

    public WsUser(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return null;
    }
}
