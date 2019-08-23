package com.example.live.results.services;

import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import com.example.live.results.domain.LiveParam;

import java.util.List;
import java.util.Optional;

public interface KategorieService {
    Iterable<Kategorie> getAllKategorie();
    Optional<Kategorie> getInfoKategorie(int id);
    Iterable<Atlet> getAtletByKategorie(int idKat);
    Kategorie getKategorie(int id);
    void updateAtlet(Atlet atlet, LiveParam l);
}
