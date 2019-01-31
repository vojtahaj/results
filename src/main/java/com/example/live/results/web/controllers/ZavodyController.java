package com.example.live.results.web.controllers;

import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.Kalendar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/zavody")
public class ZavodyController {

    @Autowired
    private ZavodRepository zavodRepository;

    @GetMapping("/zavody_list")
    public Iterable<Kalendar> getAllKategorie(){
        Iterable<Kalendar> k = zavodRepository.findAll();
        return k;
    }
}
