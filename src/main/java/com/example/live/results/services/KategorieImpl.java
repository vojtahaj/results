package com.example.live.results.services;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.dao.KategorieRepository;
import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Kategorie;
import com.example.live.results.domain.LiveParam;
import com.example.live.results.domain.ZavodParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class KategorieImpl implements KategorieService {

    private final Logger LOGGER = LoggerFactory.getLogger(KategorieImpl.class.getName());

    @Autowired
    private KategorieRepository kategorieRepository;
    @Autowired
    private ZavodRepository zavodRepository;
    @Autowired
    private AtletRepository atletRepository;
    //    @Autowired
//    private LiveParamImpl liveParam;
    @Autowired
    private final SimpMessagingTemplate simpMessagingTemplate;

//    Map<Integer, ArrayList<Atlet>> katMap = new HashMap<>();
//    List<Atlet> atleti = new ArrayList<>();


    public KategorieImpl(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @Override
    public void updateAtlet(Atlet atlet, LiveParam l) {
        int kat = atlet.getIdKategorie();
//        Iterable<Atlet> IdKategorie =  getAtletByKategorie(kategorieRepository.findKategorieByIdKat(kat));
//            KategorieLive k = new KategorieLive();

        LOGGER.info("update kategorie ve ktere byl zmenen atlet");
        //updatuj atleta v kategorii
        //zjisti jestli je uz atlet zalozen
        // addToMap(atlet);
        // katMap.put(kat,));
        //atleti = (List<Atlet>) getAtletByKategorie(kategorieRepository.findKategorieByIdKat(kat, idZav));
        // sortuj kategorii podle casu
        //ted reseno pres jpql, vytazenim z repository


        ZavodParam zavodParam = new ZavodParam(zavodRepository.findZavodById(l.getZavod()).getNazev(),
                atlet.getStc(),
                l.getRound(),
                atlet.getFlg(),
                l.getTyp(),
                l.getPocdes());
       // System.out.println(zavodParam.toString());
        simpMessagingTemplate.convertAndSend("/topic/raceInfo",
                zavodParam);
        simpMessagingTemplate.convertAndSend("/topic/live/" + kat, atletRepository.findAtletByIdKategorie(kat));
        simpMessagingTemplate.convertAndSend("/topic/live", atletRepository.findAtletByIdKategorie(kat));
        simpMessagingTemplate.convertAndSend("/topic/live/0", atletRepository.findAtletAbsolute());

    }

//    private void addToMap(Atlet atlet) {
//        ArrayList<Atlet> atlets = katMap.get(atlet.getIdKategorie());
//
//        if (atlets == null) {
//            //vytvori list pro kategorii a prida do ni atleta
//            atlets = new ArrayList<>();
//            atlets.add(atlet);
//            katMap.put(atlet.getIdKategorie(), atlets);
//        } else {
//            if (!atlets.contains(atlet))
//                atlets.add(atlet);
//            else {
//                //TODO najdi ho v array listu a nahrad novym
////                todo lepsi hashmapa v hashmape map<IdKat,map<stc,Atlet>> pro pripad, ze se data budou radit na serveru
//
//            }
//        }
//
//        katMap.put(atlet.getIdKategorie(), atlets);
//    }

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
