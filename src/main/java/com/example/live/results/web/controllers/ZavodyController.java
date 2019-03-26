package com.example.live.results.web.controllers;

import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.Zavod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/zavody")
public class ZavodyController {

    private final ZavodRepository zavodRepository;

    @Autowired
    public ZavodyController(ZavodRepository zavodRepository) {
        this.zavodRepository = zavodRepository;
    }

    @GetMapping("/zavody_list")
    public Iterable<Zavod> getAllKategorie(){
        //Iterable<Kalendar> k = zavodRepository.();
        return null;
    }
}
