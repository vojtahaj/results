package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.persistence.OneToOne;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//@Service
public class AtletImpl {
    private static List<Atlet> atleti;
//
//    @Override
//    public List<Atlet> findAll() {
//        return atleti;
//    }

//private final AtletRepository atletRepository;

    //  @Autowired
    public AtletImpl(AtletRepository atletRepository) {
//        this.atletRepository = atletRepository;
//                atleti = atletRepository.findAll();

        //
        //Optional<Atlet> byId = atletRepository.findById(id);
//        Atlet atlet = byId.get();
//        atlet.setPoradi(poradi);
//        atletRepository.save(atlet);
    }

//    @Override
//    public Atlet findAtletByBib(String bib) {
//        for(Atlet a : atleti){
//            if(a.getBib().equals(bib))
//                return a;
//        }
//        return null;
//    }




    public List<Atlet> getAtletyByIdKategorie(int kat) {



//        return atletRepository.getAtletyByIdKategorie(kat);
//      List<Atlet> atlets = new ArrayList<>();
//        for(Atlet a : atleti){
//            if(a.getIdKategorie() == kat)
//                atlets.add(a);
//        }
//        return atlets;
    return null;}

}
