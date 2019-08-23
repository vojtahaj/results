package com.example.live.results.web.websocket;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties("app.websocket")
public class WebSocketProperties {
    /**
     * Prefix used for WebSocket destination mappings
     */
    private String applicationPrefix = "/app";
    /**
     * Prefix used by topics
     */
    private String topicPrefix = "/topic";
    /**
     * Prefix used by queue
     */
    private String queuePrefix = "/queue";
    /**
     * Endpoint that can be used to connect to
     */
    private String endpoint = "/live";
    /**
     * Allowed origins
     * corsFilter
     * private String[] allowedOrigins = new String[0];
     */

}
