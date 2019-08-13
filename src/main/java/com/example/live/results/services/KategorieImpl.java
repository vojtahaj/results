package com.example.live.results.services;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.dao.KategorieRepository;
import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import com.example.live.results.web.controllers.LiveObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.*;

@Component
public class KategorieImpl implements KategorieService {

    private final Logger LOGGER = LoggerFactory.getLogger(KategorieImpl.class.getName());

    private KategorieRepository kategorieRepository;
    private ZavodRepository zavodRepository;
    private AtletRepository atletRepository;

    private LiveObserver liveObserver;


    Map<Integer, ArrayList<Atlet>> katMap = new HashMap<>();
    List<Atlet> atleti = new ArrayList<>();

    @Autowired
    public KategorieImpl(ZavodRepository zavodRepository, AtletRepository atletRepository, KategorieRepository kategorieRepository) {
        this.zavodRepository = zavodRepository;
        this.atletRepository = atletRepository;
        this.kategorieRepository = kategorieRepository;

    }

    public KategorieImpl() {
    }


    public void updateAtlet(Atlet atlet, int idZav) {
        int kat = atlet.getIdKategorie();
//        Iterable<Atlet> IdKategorie =  getAtletByKategorie(kategorieRepository.findKategorieByIdKat(kat));

        LOGGER.info("update kategorie ve ktere byl zmenen atlet");
        //updatuj atleta v kategorii
        //zjisti jestli je uz atlet zalozen
        // addToMap(atlet);
        // katMap.put(kat,));
        //atleti = (List<Atlet>) getAtletByKategorie(kategorieRepository.findKategorieByIdKat(kat, idZav));
        // sortuj kategorii podle casu
        //ted reseno pres jpql, vytazenim z repository

        //todo posli na controller
//        liveObserver.getActualAtlet(kat);

    }

    private void addToMap(Atlet atlet) {
        ArrayList<Atlet> atlets = katMap.get(atlet.getIdKategorie());

        if (atlets == null) {
            //vytvori list pro kategorii a prida do ni atleta
            atlets = new ArrayList<>();
            atlets.add(atlet);
            katMap.put(atlet.getIdKategorie(), atlets);
        } else {
            if (!atlets.contains(atlet))
                atlets.add(atlet);
            else {
                //TODO najdi ho v array listu a nahrad novym
//                todo lepsi hashmapa v hashmape map<IdKat,map<stc,Atlet>>
            }
        }


        katMap.put(atlet.getIdKategorie(), atlets);
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
        return atletRepository.findAtletByIdKategorie(idKat);
    }

    @Override
    public Kategorie getKategorie(int id) {
        return kategorieRepository.getOne(id);
    }

}
