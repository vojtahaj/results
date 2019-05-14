package com.example.live.results.web.controllers;

import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import com.example.live.results.exception.NotFoundException;
import com.example.live.results.services.KategorieImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/kategorie")
public class KategorieController {

    private final Logger LOGGER = LoggerFactory.getLogger(KategorieController.class.getName());
    @Autowired
    private KategorieImpl kategorie;

    public KategorieController(KategorieImpl kategorie) {
        this.kategorie = kategorie;
    }

    @GetMapping("/kategorie_list")
    public Iterable<Kategorie> getAllKategorie() {
        LOGGER.info("vsechny kategorie");
        Iterable<Kategorie> k = kategorie.getAllKategorie();
        return k;
    }

    @GetMapping("/{id}")
    public Kategorie getDetailKategorie(@PathVariable int id) {
        LOGGER.info("popis kategorie: " + id);
        return kategorie.getInfoKategorie(id).orElseThrow(()-> new NotFoundException("Detail kategorie se nepodarilo nacist"));
    }

    @GetMapping("/{id}/atleti")
    public Iterable<Atlet> getAtletByKategorie(@PathVariable int id) {
        int idKat = kategorie.getKategorie(id).getKat();
        LOGGER.info("atleti z kategorie: "+ idKat);
        return kategorie.getAtletByKategorie(idKat);
    }
}
