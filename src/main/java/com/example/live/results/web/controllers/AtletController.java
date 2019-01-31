package com.example.live.results.web.controllers;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.domain.Atlet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/atlet")
public class AtletController {

    @Autowired
    private AtletRepository atletRepository;

    @GetMapping("/atleti_list")
    public Iterable<Atlet> getAllAlet(){
        Iterable<Atlet> a = atletRepository.findAll();
        return a;
    }
}
