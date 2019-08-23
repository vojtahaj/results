package com.example.live.results.services;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.dao.KategorieRepository;
import com.example.live.results.dao.LiveParamRepository;
import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.LiveParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Timer;
import java.util.TimerTask;

@Service
public class LiveParamImpl {

    private final Logger LOGGER = LoggerFactory.getLogger(LiveParamImpl.class.getName());

    @Autowired
    private LiveParamRepository liveParamRepository;
    @Autowired
    private AtletRepository atletRepository;
    @Autowired
    private ZavodRepository zavodRepository;
    @Autowired
    private KategorieRepository kategorieRepository;
    @Autowired
    private KategorieImpl kategorie;

    private int last = 0;
    private Timer timer;

    public LiveParamImpl(LiveParamRepository liveParamRepository, AtletRepository atletRepository, ZavodRepository zavodRepository, KategorieRepository kategorieRepository, KategorieImpl kategorie) {
        this.liveParamRepository = liveParamRepository;
        this.atletRepository = atletRepository;
        this.zavodRepository = zavodRepository;
        this.kategorieRepository = kategorieRepository;
        this.kategorie = kategorie;

        try {
            last = liveParamRepository.getLast();
            LOGGER.info("param.last: " + last);
        } catch (Exception e) {
            e.printStackTrace();
            last = 0;
            LOGGER.error("nepovedl se nacist param.last/atlet z repozitory");
        }
        LOGGER.info("pocet aktivnich zavodu " + zavodRepository.findActiveLiveZavod().size());
        checkLast();
    }

    //timer, ktery si saha do databaze a vytahuje aktualni zmeny
    private void checkLast() {

        timer = new Timer();

        TimerTask timerTask = new TimerTask() {
            @Override
            public void run() {
                int p = 0;

//                LOGGER.info("param.last predchozi: " + last);
                try {
                    p = liveParamRepository.getLast();
                    if (p != last) {
                        Atlet atlet = atletRepository.getAtlet();
                        // updatovat atleta v kategorii
//                        KategorieImpl kategorieImpl = new KategorieImpl(simpMessagingTemplate);
//                        kategorieImpl.updateAtlet(atlet, liveParamRepository.getIdZav());
                        kategorie.updateAtlet(atlet, liveParamRepository.getLiveParam());
                        // System.out.println(atlet);
                        LOGGER.info("novy param.last: " + p);
                        last = p;
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    LOGGER.error("nenacten Atlet z repozitory");
                }

            }
        };
        if (zavodRepository.findActiveLiveZavod().size() != 0) {
            LOGGER.info("Vypisuji param.last ve smycce");
            timer.scheduleAtFixedRate(timerTask, 10, 10);
        } else {
            timer.cancel();
            LOGGER.info("zadny zavod neni aktivni");
        }
    }

    public Optional<LiveParam> getRow() {
        return liveParamRepository.findById(1);
    }
}




