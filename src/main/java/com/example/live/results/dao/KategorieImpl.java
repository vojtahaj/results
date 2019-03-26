package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Component
public class KategorieImpl implements KategorieRepository {
    private static ArrayList<Kategorie> kategorie;
    private ArrayList<Atlet> atleti;

    @Override
    public ArrayList<Kategorie> getAllKategorie() {
        return kategorie;
    }

    @Override
    public ArrayList<Atlet> getAtletsByKategorie(int kat) {
        ArrayList<Atlet> at = new ArrayList<>();
        for (int i = 0; i < atleti.size(); i++) {
            if (atleti.get(i).getIdKategorie() == kat) {
                at.add(atleti.get(i));
            }
        }
        return at;
    }
}
