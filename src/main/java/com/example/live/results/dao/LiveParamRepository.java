package com.example.live.results.dao;

import com.example.live.results.domain.LiveParam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

//jparepozitor<to na co se dotazuji, ID>
public interface LiveParamRepository extends JpaRepository<LiveParam, Integer> {

    //    @Query("select l.atlet from LiveParam l where l.last = :k")
    //param rika ze si "k" preda do dotazu
    @Query(value = "select l.actstc from LiveParam l")
    int getAtlet();//@Param("k") int k);

    //fixme vyzkouset
    //List<LiveParam> findAllByLast(int last);

    @Query(value = "select l.last from LiveParam  l")
    int getLast();
}
