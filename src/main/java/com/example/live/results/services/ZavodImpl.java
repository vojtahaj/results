package com.example.live.results.services;

import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.Kategorie;
import com.example.live.results.domain.Zavod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ZavodImpl implements ZavodSerivce {

    @Autowired
    private ZavodRepository zavodRepository;

    public ZavodImpl(ZavodRepository zavodRepository) {
        this.zavodRepository = zavodRepository;
    }

    @Override
    public Optional<Zavod> getZavodById(int id) {
        return zavodRepository.findById(id);
    }

    @Override
    public List<Zavod> findAll() {
        return zavodRepository.findAll();
    }

    @Override
    public List<Zavod> findActiveLiveZavod() {
        return zavodRepository.findActiveLiveZavod();
    }

    @Override
    public List<Kategorie> getKategorieByZavod(int id) {
        return zavodRepository.findById(id).get().getKategorie();
    }
}
