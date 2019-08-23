package com.example.live.results.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ZavodParam {
    private String nazev;
    private int stc;
    private int koloZavodu;
    private int kodStc;
    private int druhZavodu;
    private int pocDes;
}
