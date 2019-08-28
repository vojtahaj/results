package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.LiveParamT;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

public interface LiveParamTRepository extends JpaRepository<LiveParamT, Integer> {
    @Query(value = "select l from LiveParamT l where l.zpracovan = 0 order by l.id")
    ArrayList<LiveParamT> getNotProcessRows();

    @Query(value = "select l from LiveParamT l where l.zpracovan = 0 and l.zavod = :idZav order by l.id")
    List<LiveParamT> getNotProcessRowsByIdZav(@Param("idZav") int idZav);

    @Query(value = "select a from Atlet  a, LiveParam l where a.stc = l.actstc")
    Atlet getAtlet();//@Param("k") int k);

    @Modifying
    @Transactional
    @Query("update LiveParamT set zpracovan = 1 where id = :id")
    void setProcessComplete(@Param("id") int id);

    @Query("select l from LiveParamT l where l.id = :id")
    LiveParamT getRow(@Param("id") int id);
}
