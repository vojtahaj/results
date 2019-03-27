package com.example.live.results.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ZavodImpl {

    @Autowired
    private ZavodRepository zavodRepository;

    public ZavodRepository getZavodRepository() {
        return zavodRepository;
    }

    public void setZavodRepository(ZavodRepository zavodRepository) {
        this.zavodRepository = zavodRepository;
    }

    public ZavodImpl(ZavodRepository zavodRepository){
        this.zavodRepository = zavodRepository;
        //zavodRepository.findAll();
    }
}
