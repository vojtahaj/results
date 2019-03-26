package com.example.live.results.dao;

import com.example.live.results.domain.Atlet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Timer;
import java.util.TimerTask;

@Component
public class LiveParamImpl {

    private final LiveParamRepository liveParamRepository;
    private int last = 0;
    private Timer timer;

    @Autowired
    public LiveParamImpl(LiveParamRepository liveParamRepository) {
        this.liveParamRepository = liveParamRepository;
        System.out.println("param live impl konstruktor");

        try {
            last = liveParamRepository.getLast();
            System.out.println("param.last: " + last);
//            Atlet atlet = liveParamRepository.getAtlet(last);
//            System.out.println(atlet.toString());
        } catch (Exception e) {
            e.printStackTrace();
            last = 0;
            System.out.println("err");
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

                System.out.println("vypisuji puvodni param.last: " + last);
                try {
                    p = liveParamRepository.getLast();
                    if (p != last) {
                        System.out.println("ruzny param.last!");
                        Atlet atlet = liveParamRepository.getAtlet(p);
                        System.out.println(atlet.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }

                System.out.println("novy param.last: " + p);
                last = p;
            }
        };
        timer.scheduleAtFixedRate(timerTask, 7000, 7000);
    }

}




