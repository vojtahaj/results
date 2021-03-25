package com.example.live.results.dao;

import com.example.live.results.domain.Zavod;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface ZavodRepository extends JpaRepository<Zavod, Integer> {

    @Query("SELECT z from Zavod z where z.stav = 9")
    List<Zavod> findActiveLiveZavod();

    @Query("SELECT z from Zavod z where z.id = :idZav")
    Zavod findZavodById(@Param("idZav") int idZav);
}
