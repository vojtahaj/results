package com.example.live.results.services;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.dao.LiveParamRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.LiveParam;
import jdk.internal.dynalink.linker.LinkerServices;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

@Component
public class LiveParamImpl {

    private final Logger LOGGER = LoggerFactory.getLogger(LiveParamImpl.class.getName());

    private final LiveParamRepository liveParamRepository;
    private final AtletRepository atletRepository;
    private int last = 0;
    private Timer timer;

    @Autowired
    public LiveParamImpl(LiveParamRepository liveParamRepository, AtletRepository atletRepository) {
        this.liveParamRepository = liveParamRepository;
        this.atletRepository = atletRepository;
        //    LOGGER.info("param live impl konstruktor");

        try {
            last = liveParamRepository.getLast();
            LOGGER.info("param.last: " + last);
//            Optional<Atlet> atlet = atletRepository.findById(7);
//            System.out.println(atlet.toString());
        } catch (Exception e) {
            e.printStackTrace();
            last = 0;
            LOGGER.error("nepovedl se nacist param.last/atlet z repozitory");
        }
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
                        Atlet atlet = liveParamRepository.getAtlet();
                            //todo updatovat atleta v kategorii
                        //kategorieimpl.updateAtlet(atlet)
                        System.out.println(atlet);
                        LOGGER.info("novy param.last: "+ p);
                        last = p;
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    LOGGER.error("nenacten Atlet z repozitory");
                }


            }
        };
        timer.scheduleAtFixedRate(timerTask, 7000, 7000);
    }

    public LiveParam get() {
        List<LiveParam> liveParams = liveParamRepository.findAll();
        System.out.println(liveParams);
        return liveParamRepository.getOne(0);
    }


    public Atlet getLastAtlet() {
        return liveParamRepository.getAtlet();
    }
}




