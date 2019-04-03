package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface KategorieRepository extends JpaRepository<Kategorie, Integer> {

    @Query("select k.id from Kategorie k where k.kat = :kat and k.zavod.id = :idZav")
    int findKategorieByIdKat(@Param("kat") int kat, @Param("idZav") int idZav);

//    @Query("select a from Atlet a where Kategorie.kat = :kat order by a.flg desc, a.cas asc")
//    List<Atlet> getAtletesByCategory(@Param("id_kat" )int kat);

}
