package com.example.live.results.dao;

import com.example.live.results.domain.LiveParam;
import com.example.live.results.domain.Zavod;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.TimerTask;

@Component
public class LiveParamImpl {

    private final LiveParamRepository liveParamRepository;
    private int last = 0;

    public int getLast() {
        return last;
    }

    public void setLast(int last) {
        this.last = last;
    }


    @Autowired
    public LiveParamImpl(LiveParamRepository liveParamRepository) {
        this.liveParamRepository = liveParamRepository;
        checkLast();
    }
    private  void checkLast(){
        try {
            setLast(liveParamRepository.getLast());
        }
        catch (Exception e){
            e.printStackTrace();
            setLast(0);
        }
        //timer, ktery si saha do databaze a vytahuje aktualni zmeny
        TimerTask timerTask = new TimerTask() {
            @Override
            public void run() {
                System.out.println("vypisuji puvodni param.last: " + last);

                try {
                    Thread.sleep(10000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                LiveParam atlet = liveParamRepository.getAtlet(last + 1);

                if(atlet.getLast() != last)
                    System.out.println ("Novy param.last: " + atlet.getLast());
                else System.out.println("porad stejny last");
            }
        };


    }
}
