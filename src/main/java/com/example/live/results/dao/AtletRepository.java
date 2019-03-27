package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface AtletRepository extends JpaRepository<Atlet, Integer> {

//    List<Atlet> findAll();

    //totez co LiveParamRepositorz.getAtlet(k);
    @Query("select a from Atlet a where a.liveParam.last = :last")
    Atlet findAtletByLast(@Param("last") int last);

//    @Query("select a from Atlet a where a.idKategorie = :kat")
//    List<Atlet> getAtletyByIdKategorie(@Param("kat") int kat);

    @Query("select a from Atlet a where a.idKategorie = :id")
    List<Atlet> athletesByCategory(@Param("id") int id);
}
