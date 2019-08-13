package com.example.live.results.web.controllers;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.services.AtletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class WSController implements LiveObserver {

    @Autowired
    AtletService atletService;
    @Autowired
    AtletRepository atletRepository;

    @Override
    public void getActualAtlet(@DestinationVariable int idKat) {
        updateKategorie(idKat);
    }

    @SubscribeMapping("/live/{idKat}")
    public List<Atlet> updateKategorie(@DestinationVariable int idKat) {
        return atletRepository.findAtletByIdKategorie(idKat);
    }

    @MessageMapping("/live/find/{bib}")
    @SendToUser("/user/live/{bib}")
    public List<Atlet> findAtlet(@DestinationVariable String bib){
        return atletService.findAllByBib(bib);
    }
}
