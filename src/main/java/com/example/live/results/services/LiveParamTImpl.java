package com.example.live.results.services;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.dao.LiveParamTRepository;
import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.LiveParamT;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Timer;
import java.util.TimerTask;

@Service
public class LiveParamTImpl {
    private final Logger LOGGER = LoggerFactory.getLogger(LiveParamTImpl.class.getName());

    @Autowired
    private LiveParamTRepository liveParamTRepository;
    @Autowired
    private AtletRepository atletRepository;
    @Autowired
    private ZavodRepository zavodRepository;
    @Autowired
    private KategorieImpl kategorie;

    private int last = 0;
    private Timer timer;

    public LiveParamTImpl(LiveParamTRepository liveParamTRepository, AtletRepository atletRepository, ZavodRepository zavodRepository, KategorieImpl kategorie) {
        this.liveParamTRepository = liveParamTRepository;
        this.atletRepository = atletRepository;
        this.zavodRepository = zavodRepository;
        this.kategorie = kategorie;

        try {

            last = liveParamTRepository.getNotProcessRows().get(0).getLast();
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
                    ArrayList<LiveParamT> lastRows = liveParamTRepository.getNotProcessRows();

                    for (LiveParamT row : lastRows) {
                        p = row.getLast();
                        if (p != last) {
                            Atlet atlet = atletRepository.getAtletFromRows(p);

                            kategorie.updateAtletByRows(atlet, liveParamTRepository.getRow(row.getId()));

                            LOGGER.info("novy param.last: " + p);
                            last = p;
                            liveParamTRepository.setProcessComplete(row.getId());
                        }

                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    LOGGER.error("nenacten Atlet z repozitory");
                }

            }
        };
        if (zavodRepository.findActiveLiveZavod().size() != 0) {
            LOGGER.info("Vypisuji param.last ve smycce");
            timer.scheduleAtFixedRate(timerTask, 1005, 1005);
        } else {
            timer.cancel();
            LOGGER.info("zadny zavod neni aktivni");
        }
    }

}
