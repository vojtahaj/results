package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface KategorieRepository {
    ArrayList<Kategorie> getAllKategorie();
    ArrayList<Atlet> getAtletsByKategorie(int kat);

}
