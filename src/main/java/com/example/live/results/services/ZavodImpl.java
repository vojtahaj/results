package com.example.live.results.services;

import com.example.live.results.dao.ZavodRepository;
import com.example.live.results.domain.Kategorie;
import com.example.live.results.domain.Zavod;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Log4j2
@Component
public class ZavodImpl implements ZavodSerivce {

    private ZavodRepository zavodRepository;

    @Autowired
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

    @Override
    @Transactional
    public void create(Zavod zavod) {
        zavodRepository.save(zavod);
    }

    @Override
    @Transactional
    public ResponseEntity<Zavod> update(int idZav, Zavod zavod) {
        Zavod zavodToUpdate = new Zavod();
        BeanUtils.copyProperties(zavod, zavodToUpdate);
        log.info(zavodToUpdate.toString());
//        zavodToUpdate.setId(idZav);
        log.info("update id: "+ idZav);
       // zavodRepository.save(zavodToUpdate);
        zavod.setId(idZav);
        zavodRepository.save(zavodToUpdate);
//        final Zavod updatedZavod = zavodRepository.save(zavodToUpdate);
//        System.out.println("updatedZavod id: "+ updatedZavod.getId());
//        log.info("zavod ulozen");
        return ResponseEntity.ok(zavodToUpdate);
    }

    @Override
    public void delete(int id) {
        zavodRepository.deleteById(id);
    }
}
