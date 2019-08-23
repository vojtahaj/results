package com.example.live.results.web.websocket;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.*;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;

@Configuration
@ConfigurationProperties
@EnableConfigurationProperties(WebSocketProperties.class)
@EnableWebSocketMessageBroker
@EnableWebSocket
@AllArgsConstructor
@Log4j2
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    private WebSocketProperties webSocketProperties;

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker(webSocketProperties.getTopicPrefix(), webSocketProperties.getQueuePrefix());
        registry.setApplicationDestinationPrefixes(webSocketProperties.getApplicationPrefix(), webSocketProperties.getTopicPrefix());
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint(webSocketProperties.getEndpoint()).setAllowedOrigins("*")
                .setHandshakeHandler(new AssignPrincipalHandshakeHandler());
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new WsUserInterceptor());
    }
    @EventListener
    public void handleSubscribeEvent (SessionSubscribeEvent event){
        log.info("<==> handleSubscribeEvent: username=" + event.getUser().getName() + ", event=" + event);
    }

    @EventListener
    public void handleConnectEvent (SessionConnectEvent event){
        log.info("===> handleConnectEvent: username=" + event.getUser().getName() + ", event=" + event);
    }

    @EventListener
    public void handleDisconnectEvent (SessionDisconnectEvent event){
        log.info("<=== handleDisconnectEvent: username=" + event.getUser().getName() + ", event=" + event);
    }
}
