package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AtletRepository extends JpaRepository<Atlet, Integer> {

    @Query("select a from Atlet a, LiveParam l where a.stc = l.actstc")
    //Atlet getAtlet(@Param("stc") int last);
    Atlet getAtlet();

    @Query("select a from Atlet a where a.idKategorie = :id order by a.cas")
    List<Atlet> findAtletByIdKategorie(@Param("id") int id);

    @Query("select a from Atlet a where a.bib = :bib")
    List<Atlet> findAllByBib(@Param("bib") String bib);

    @Query("select a from Atlet a order by a.cas")
    List<Atlet> findAtletAbsolute();
}
