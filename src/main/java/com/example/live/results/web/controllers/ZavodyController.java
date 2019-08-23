package com.example.live.results.web.controllers;

import com.example.live.results.domain.Kategorie;
import com.example.live.results.domain.Zavod;
import com.example.live.results.exception.NotFoundException;
import com.example.live.results.services.ZavodImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/zavody")
@Log4j2
public class ZavodyController {

    @Autowired
    private ZavodImpl zavod;

    public ZavodyController(ZavodImpl zavod) {
        this.zavod = zavod;
    }

    @GetMapping
    public List<Zavod> getZavody() {
        log.info("vypis seznamu zavodu");
        return zavod.findAll();
    }

    @GetMapping(value = "/{id}")
    public Optional<Zavod> getZavodById(@PathVariable int id) {
        log.info("info o zavodu s id: " + id);
        return Optional.ofNullable(zavod.getZavodById(id).orElseThrow(() -> new NotFoundException("zavod not found with id: " + id)));
    }

    @GetMapping(value = "/{id}/kategorie")
    public List<Kategorie> getKategorieByZavod(@PathVariable int id) {
        log.info("kategorie pro zavod s id: " + id);
        return zavod.getKategorieByZavod(id);
    }

    @GetMapping(value = "/actives")
    public List<Zavod> getActiveZavod() {
        log.info("Zavody v povolenem modu pro live vypsany");
        if (zavod.findActiveLiveZavod().isEmpty()) {
            throw new NotFoundException("zadne zavody v live rezimu");
        }
        return zavod.findActiveLiveZavod();
    }

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> createZavod(@RequestBody Zavod z) {

        zavod.create(z);

        return new ResponseEntity<>(z, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateZavod(@RequestBody int id, Zavod z) {
//        z = zavod.update(id, z);

        if (z == null)
            return new ResponseEntity<>("Zavod s danym id neexistuje: " + id, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(z, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteZavodById(@RequestBody int id){
        zavod.delete(id);
    }
}
