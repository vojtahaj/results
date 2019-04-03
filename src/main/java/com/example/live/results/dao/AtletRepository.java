package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AtletRepository extends JpaRepository<Atlet, Integer> {

//    @Query("select a from Atlet a where a.stc = :stc")
//    Atlet getAtlet(@Param("stc") int stc);

//    @Query("select a from Atlet a where a.idKategorie = :id")
//    List<Atlet> findAtletByIdKategorie(@Param("id") int id);
}
