package com.example.live.results.web.controllers;

import com.example.live.results.dao.AtletRepository;
import com.example.live.results.domain.Atlet;
import com.example.live.results.domain.Test;
import com.example.live.results.services.AtletService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import java.security.Principal;
import java.util.List;

@Controller
@Log4j2
public class WSController {

    @Autowired
    AtletService atletService;
    @Autowired
    AtletRepository atletRepository;

    @Autowired
    private final SimpMessagingTemplate simpMessagingTemplate;

    public WSController(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @MessageMapping("/live/{idKat}")
    @SendTo("/topic/live/{idKat}")
    @SubscribeMapping("/topic/live/{idKat}")
    public List<Atlet> updateKategorie(@DestinationVariable int idKat) {
        System.out.println("update kategorie");
        if (idKat == 0 ){
            simpMessagingTemplate.convertAndSend("/topic/live/0",atletRepository.findAtletAbsolute());
        }
        else simpMessagingTemplate.convertAndSend("/topic/live/{idKat}",atletRepository.findAtletByIdKategorie(idKat));
        return atletRepository.findAtletByIdKategorie(idKat);
    }

    @SendTo("/topic/test")
    @MessageMapping("/test")
//    @Scheduled(fixedDelay = 5000)
    public Test testMessage() throws InterruptedException {
        Thread.sleep(1000);
        log.info("testMesssage");
        return new Test(1, "body");
    }

    @MessageMapping("/live/find/{bib}")
    @SendToUser("/user/queue/live")
    public void findAtlet(Principal principal, @DestinationVariable int bib) throws Exception {

        log.info("pokus o find atlet: " + bib);

//        System.out.println(atletService.findAllByBib(String.valueOf(bib)));

        if (!atletService.findAllByBib(String.valueOf(bib)).toString().equals("[]")){
            log.info("Bib sucessfully found;");
            simpMessagingTemplate.convertAndSendToUser(principal.getName(), "queue/live", atletService.findAllByBib(String.valueOf(bib)));}
        else{
            simpMessagingTemplate.convertAndSendToUser(principal.getName(), "queue/live/error", "Bib not found");
        log.warn("Bib not found;");
        }
    }

//    @SubscribeMapping("/topic/race")
//    public String getLastActual(@DestinationVariable int id) {
//        //return new ZavodParam(zavod.getNazev,liveParam.getKolo(),atlet.getStc(),atlet.getKod());
//        return String.valueOf(id);
//    }

}
