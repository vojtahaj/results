package com.example.live.results.web.controllers;

import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import com.example.live.results.domain.Zavod;
import com.example.live.results.exception.NotFoundException;
import com.example.live.results.services.ZavodImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/zavody")
public class ZavodyController {

    private final Logger LOGGER = LoggerFactory.getLogger(ZavodyController.class.getName());

    @Autowired
    private ZavodImpl zavod;

    public ZavodyController(ZavodImpl zavod) {
        this.zavod = zavod;
    }

    @GetMapping("/all")
    public List<Zavod> getZavody() {
        LOGGER.info("vypis seznamu zavodu");
        return zavod.findAll();
    }

    @GetMapping(value = "/zavod/{id}")
    public Optional<Zavod> getZavodById(@PathVariable int id) {
        LOGGER.info("info o zavodu s id: " + id);
        return Optional.ofNullable(zavod.getZavodById(id).orElseThrow(() -> new NotFoundException("zavod not found with id: " + id)));
    }

    @GetMapping(value = "/zavod/{id}/kategorie")
    public List<Kategorie> getKategorieByZavod(@PathVariable int id) {
        LOGGER.info("kategorie pro zavod s id: " + id);
        return zavod.getKategorieByZavod(id);
    }

    @GetMapping(value = "/active")
    public List<Zavod> getActiveZavod() {
        LOGGER.info("Zavody v povolenem modu pro live vypsany");
        if (zavod.findActiveLiveZavod().isEmpty()) {
            throw new NotFoundException("zadne zavody v live rezimu");
        }
        return zavod.findActiveLiveZavod();
    }

}
