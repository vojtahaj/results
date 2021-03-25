package com.example.live.results.services;

import com.example.live.results.domain.Kategorie;
import com.example.live.results.domain.Zavod;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface ZavodSerivce {

    Optional<Zavod> getZavodById(int id);

    List<Zavod> findAll();

    List<Zavod> findActiveLiveZavod();

    List<Kategorie> getKategorieByZavod(int id);

    void create(Zavod zavod);

    ResponseEntity<Zavod> update(int idZav, Zavod zavod);

    void delete(int id);
}
