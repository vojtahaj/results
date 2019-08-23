package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.LiveParam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

//jparepozitor<to na co se dotazuji, Id>
public interface LiveParamRepository extends JpaRepository<LiveParam, Integer> {

    //    @Query("select l.atlet from LiveParam l where l.last = :k")
    //param rika ze si "k" preda do dotazu
    @Query(value = "select a from Atlet  a, LiveParam l where a.stc = l.actstc")
    Atlet getAtlet();//@Param("k") int k);

    @Query(value = "select l.last from LiveParam  l")
    int getLast();

    @Query(value = "select l.zavod.id from LiveParam  l")
    int getIdZav();

    @Query("select l from LiveParam l")
    LiveParam getLiveParam();
}
