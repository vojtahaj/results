package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import com.sun.xml.internal.bind.v2.model.core.ID;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.List;

public interface KategorieRepository extends JpaRepository<Kategorie,ID> {
    //    List<Atlet> getAtletsByKategorie(int kat);

}
