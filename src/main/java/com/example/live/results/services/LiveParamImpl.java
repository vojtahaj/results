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
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.Timer;
import java.util.TimerTask;

@Component
public class LiveParamImpl {

    private final Logger LOGGER = LoggerFactory.getLogger(LiveParamImpl.class.getName());

    private final LiveParamRepository liveParamRepository;
    private final AtletRepository atletRepository;
    private final ZavodRepository zavodRepository;
    private final KategorieRepository kategorieRepository;

    private int last = 0;
    private Timer timer;

    @Autowired
    public LiveParamImpl(LiveParamRepository liveParamRepository, AtletRepository atletRepository, ZavodRepository zavodRepository, KategorieRepository kategorieRepository) {
        this.liveParamRepository = liveParamRepository;
        this.atletRepository = atletRepository;
        this.zavodRepository = zavodRepository;
        this.kategorieRepository = kategorieRepository;

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

                LOGGER.info("param.last predchozi: " + last);
                try {
                    p = liveParamRepository.getLast();
                    if (p != last) {
                        Atlet atlet = atletRepository.getAtlet();
                        //todo updatovat atleta v kategorii
                        KategorieImpl kategorieImpl = new KategorieImpl(zavodRepository, atletRepository,kategorieRepository);
                        kategorieImpl.updateAtlet(atlet, liveParamRepository.getIdZav());

                        //todo update paramLastController
                        System.out.println(atlet);
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
            timer.scheduleAtFixedRate(timerTask, 7000, 7000);
        } else {
            timer.cancel();
            LOGGER.info("zadny zavod neni aktivni");
        }
    }

    public Optional<LiveParam> getRow(){
        return liveParamRepository.findById(0);
    }
}




