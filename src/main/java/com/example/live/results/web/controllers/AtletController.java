package com.example.live.results.web.controllers;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.dao.KategorieRepository;
import com.example.live.results.dao.LiveParamRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/atlet")
public class AtletController {

    @Autowired
    private AtletRepository atletRepository;

    @Autowired
    private LiveParamRepository liveParamRepository;

    @GetMapping("/atleti")
    public List<Atlet> getAllAlet() {
        return atletRepository.findAll();
    }

    @GetMapping("/atlet/last")
    public Atlet getLastAlet() {

        return liveParamRepository.getAtlet();
    }

}
