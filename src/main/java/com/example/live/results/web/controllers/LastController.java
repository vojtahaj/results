package com.example.live.results.web.controllers;

import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.LiveParam;
import com.example.live.results.services.LiveParamImpl;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/last")
public class LastController {

    LiveParamImpl liveParam;

    public LastController(LiveParamImpl liveParam) {
        this.liveParam = liveParam;
    }

    @RequestMapping("/id")
    public LiveParam getLast(){
        return liveParam.get();
    }

    @RequestMapping("/atlet")
    public Atlet getAtlet(){
        return liveParam.getLastAtlet();
    }
}
