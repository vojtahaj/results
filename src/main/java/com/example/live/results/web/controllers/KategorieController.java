package com.example.live.results.web.controllers;

import com.example.live.results.dao.KategorieRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import com.example.live.results.services.KategorieImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/kategorie")
public class KategorieController {

    private final Logger LOGGER = LoggerFactory.getLogger(KategorieController.class.getName());

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
    public Optional<Kategorie> getDetailKategorie(@PathVariable int id) {
        LOGGER.info("popis kategorie: " + id);
        return kategorie.getInfoKategorie(id);
    }

    @GetMapping("/{id}/atleti")
    public Iterable<Atlet> getAtletByKategorie(@PathVariable int id) {
        int idKat = kategorie.getKategorie(id).getKat();
        LOGGER.info("atleti z kategorie: "+ idKat);
        return kategorie.getAtletByKategorie(idKat);
    }
}
