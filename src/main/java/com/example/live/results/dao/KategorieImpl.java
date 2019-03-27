package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Component
public class KategorieImpl {
    private KategorieRepository kategorieRepoitory;
//    private ArrayList<Atlet> atleti;

    public List<Atlet> getAtletsByKategorie(int kat) {
        ArrayList<Atlet> at = new ArrayList<>();
//        for (int i = 0; i < atleti.size(); i++) {
//            if (atleti.get(i).getIdKategorie() == kat) {
//                at.add(atleti.get(i));
//            }
//        }
        return at;
    }
}
