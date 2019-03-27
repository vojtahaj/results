package com.example.live.results.web.controllers;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.dao.KategorieRepository;
import com.example.live.results.dao.LiveParamRepository;
import com.example.live.results.domain.Atlet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/atlet")
public class AtletController {

    @Autowired
    private AtletRepository atletRepository;

//    @Autowired
//    private KategorieRepository kategorieRepository;

    @Autowired
    private LiveParamRepository liveParamRepository;

    @GetMapping("/atleti_list")
    public ArrayList<Atlet> getAllAlet(){
//        ArrayList<Atlet> a = atletRepository.findAll();
        return null;//a;
    }

    //smazat nebo upravit fixme
    @GetMapping("/atlet_last")
    public Atlet getLastAlet(){

        return atletRepository.findAtletByLast(6);//a;
    }


    @GetMapping("/todo")
    public List<Atlet> example() {
        final int last = liveParamRepository.getLast();
        final Atlet atletByLast = atletRepository.findAtletByLast(last);
//        final int idKategorie = atletByLast.getIdKategorie();

        //final  ArrayList<Atlet> atletsByKategorie = kategorieRepository.getAtletsByKategorie(idKategorie);
        // todo sort atletsByKategorie by time
        return null;//atletsByKategorie;
    }
}
