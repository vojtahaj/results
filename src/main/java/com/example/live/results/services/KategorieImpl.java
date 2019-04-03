package com.example.live.results.services;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.dao.KategorieRepository;
import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class KategorieImpl implements KategorieService {

    @Autowired
    private KategorieRepository kategorieRepository;

    @Autowired
    private ZavodRepository zavodRepository;

    @Autowired
    private AtletRepository atletRepository;

    Map<Integer, ArrayList<Atlet>> katMap = new HashMap<>();
    List<Atlet> atleti = new ArrayList<>();


    public void updateAtlet(Atlet atlet) {
//        int kat = atlet.getIdKategorie();


        //updatuj atleta v kategorii
        //zjisti jestli je uz atlet zalozen
        addToMap(atlet);
       // katMap.put(kat,));

        //todo sortuj kategorii podle casu

        //todo posli na controller
    }

    private void addToMap(Atlet atlet) {
        ArrayList<Atlet> atlets = katMap.get(atlet.getIdKategorie());

        if (atlets == null){
            //vytvori list pro kategorii a prida do ni atleta
            atlets = new ArrayList<>();
            atlets.add(atlet);
//            katMap.put(atlet.getIdKategorie(), atlets);
        }
        else {
            if (!atlets.contains(atlet))
                atlets.add(atlet);
            else {
                //TODO najdi ho v array listu a nahrad novym
//                todo lepsi hashmapa v hashmape map<IdKat,map<stc,Atlet>>
            }
        }


//        katMap.put(atlet.getIdKategorie(),atlets);
    }

    public KategorieImpl(KategorieRepository kategorieRepository, ZavodRepository zavodRepository) {
        this.kategorieRepository = kategorieRepository;
        this.zavodRepository = zavodRepository;

    }

    @Override
    public Iterable<Kategorie> getAllKategorie() {
        return kategorieRepository.findAll();
    }

    @Override
    public Optional<Kategorie> getInfoKategorie(int id) {
        return kategorieRepository.findById(id);
    }

    @Override
    public Iterable<Atlet> getAtletByKategorie(int idKat) {
        return null; //atletRepository.findAtletByIdKategorie(idKat);
    }

    @Override
    public Kategorie getKategorie(int id) {
        return kategorieRepository.getOne(id);
    }

//    @Override
//    public List<Kategorie> getKategoriebyZavod(int idZav) {
//        return zavodRepository.getOne(idZav).getKategorie();
//    }
}
