package com.example.live.results.web.controllers;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.dao.KategorieRepository;
import com.example.live.results.dao.LiveParamRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/atlet")
public class AtletController {

    @Autowired
    private AtletRepository atletRepository;

    @Autowired
    private KategorieRepository kategorieRepository;

    @Autowired
    private LiveParamRepository liveParamRepository;

    @GetMapping("/atleti_list")
    public List<Atlet> getAllAlet() {
        return atletRepository.findAll();
    }

    @GetMapping("/atlet_last")
    public Atlet getLastAlet() {

        return liveParamRepository.getAtlet();
    }

    @GetMapping("/{id_kategorie}")
    public List<Atlet> example() {
        final int last = liveParamRepository.getLast();
        // final Atlet atletByLast = atletRepository.findAtletByLast(last);
//        final int idKategorie = atletByLast.getIdKategorie();

        //final  ArrayList<Atlet> atletsByKategorie = kategorieRepository.getAtletsByKategorie(idKategorie);
        // todo sort atletsByKategorie by time
        return null;//atletsByKategorie;
    }

    @GetMapping("/find")
    public HashMap<Integer, Atlet> getByBib(String bib, int idZav) {
        List<Atlet> atlets = atletRepository.findAllbyBib(bib);
        for (int i = 0; i < atlets.size(); i++) {
            int k = kategorieRepository.findKategorieByIdKat(atlets.get(i).getIdKategorie(), idZav);

        }
        throw new NotFoundException("zavodnik nenalezen");
        //return null;
    }
}
