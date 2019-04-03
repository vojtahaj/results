package com.example.live.results.services;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.domain.Atlet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.persistence.OneToOne;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AtletImpl implements AtletService {

    @Autowired
    AtletRepository atletRepository;

    public AtletImpl(AtletRepository atletRepository) {
        this.atletRepository = atletRepository;
    }

    @Override
    public List<Atlet> findAllByBib(String bib) {
        return atletRepository.findAllbyBib(bib);
        //todo najit ho v tabulkach podle  poradi
    }
}
