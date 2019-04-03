package com.example.live.results.services;

import com.example.live.results.domain.Atlet;

import java.util.List;

public interface AtletService {
    List<Atlet> findAllByBib(String bib);
}
