package com.example.live.results.web.controllers;

import com.example.live.results.domain.LiveParam;
import com.example.live.results.services.LiveParamImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/live")
public class LiveParamController{
    private final Logger LOGGER = LoggerFactory.getLogger(LiveParamController.class.getName());

    @Autowired
    private LiveParamImpl liveParam;

    public LiveParamController(LiveParamImpl liveParam) {
        this.liveParam = liveParam;
    }

    @RequestMapping("/aktual")
    public Optional<LiveParam> getLive(){
        LOGGER.info("update Controlleru");
        return liveParam.getRow();
    }

}