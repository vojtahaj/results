package com.example.live.results.services;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.dao.KategorieRepository;
import com.example.live.results.dao.LiveParamTRepository;
import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class KategorieImpl implements KategorieService {

    private final Logger LOGGER = LoggerFactory.getLogger(KategorieImpl.class.getName());

    private ZavodParam zavodParam;

    @Autowired
    private KategorieRepository kategorieRepository;
    @Autowired
    private ZavodRepository zavodRepository;
    @Autowired
    private AtletRepository atletRepository;
    @Autowired
    private LiveParamTRepository liveParamT;
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

        zavodParam = new ZavodParam(zavodRepository.findZavodById(l.getZavod()).getNazev(),
                new Integer(atlet.getBib()),
                l.getActstc(),
                l.getRound(),
                atlet.getFlg(),
                l.getTyp(),
                l.getPocdes());
        update(kat, zavodParam);

        LOGGER.info("update kategorie ve ktere byl zmenen atlet");
    }

    @Override
    public void updateAtletByRows(Atlet atlet, LiveParamT l) {
        int kat = atlet.getIdKategorie();
        LOGGER.error("zavod v liveparamT:" + l.getZavod());
        zavodParam = new ZavodParam(l.getNazev(),
                new Integer(atlet.getBib()),
                l.getActstc(),
                l.getRound(),
                atlet.getFlg(),
                l.getTyp(),
                l.getPocdes());
        update(kat, zavodParam);

//        update(kat, zavodParam);
        LOGGER.info("update kategorie ve ktere byl zmenen atlet");
    }

    private void update(int kat, ZavodParam z) {

        simpMessagingTemplate.convertAndSend("/topic/raceInfo", z);
        simpMessagingTemplate.convertAndSend("/topic/live", atletRepository.findAtletByIdKategorie(kat));
        simpMessagingTemplate.convertAndSend("/topic/live/" + kat, atletRepository.findAtletByIdKategorie(kat));
        simpMessagingTemplate.convertAndSend("/topic/live/0", atletRepository.findAtletAbsolute());
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

    public ZavodParam getZavodParam(int race) {
        LiveParamT l = liveParamT.getLast();
        if (zavodParam == null) {
            zavodParam = new ZavodParam(zavodRepository.findZavodById(race).getNazev(),
                    0,
                    0,
                    0,
                    0,
                    l.getTyp(),
                    l.getPocdes());
            return zavodParam;
        } else return zavodParam;
    }

}
