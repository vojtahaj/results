package com.example.live.results.dao;

import com.example.live.results.domain.Kategorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Component
public class ZavodImpl implements ZavodRepository {

    private ZavodRepository zavodRepository;

    public ZavodRepository getZavodRepository() {
        return zavodRepository;
    }

    public void setZavodRepository(ZavodRepository zavodRepository) {
        this.zavodRepository = zavodRepository;
    }

   // @Autowired
    public ZavodImpl(){
//        zavodRepository.
    }
}
