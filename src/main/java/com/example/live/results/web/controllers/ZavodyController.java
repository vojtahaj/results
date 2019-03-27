package com.example.live.results.web.controllers;

import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.Kategorie;
import com.example.live.results.domain.Zavod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/zavody")
public class ZavodyController {

    @Autowired
    private ZavodRepository zavodRepository;

    public ZavodyController(ZavodRepository zavodRepository) {
        this.zavodRepository = zavodRepository;
    }

    @GetMapping("/zavody_list")
    public List<Zavod> getZavody() {
        return zavodRepository.findAll();
    }

    @GetMapping(value = "/zavod/{id}")
    public Optional<Zavod> getZavodById(@PathVariable int id) {
        System.out.println("zavodById");
        return zavodRepository.findById(id);
    }

    @GetMapping(value = "/zavod/{id}/kategorie")
    public List<Kategorie> getKategorieByZavod(@PathVariable int id) {

        System.out.println("kategorie by zavod");

        return zavodRepository.findById(id).get().getKategorie();
    }
}
