package com.example.live.results.web.controllers;

import com.example.live.results.dao.KategorieRepository;
import com.example.live.results.domain.Kategorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/kategorie")
public class KategorieController {

    @Autowired
    private KategorieRepository kategorieRepository;

    public KategorieController(KategorieRepository kategorieRepository) {
        this.kategorieRepository = kategorieRepository;
    }

    @GetMapping("/kategorie_list")
    public ArrayList<Kategorie> getAllKategorie(){
        ArrayList<Kategorie> k = (ArrayList<Kategorie>) kategorieRepository.findAll();
        return k;
    }

}
