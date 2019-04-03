package com.example.live.results.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@NoArgsConstructor
@ToString(exclude = {"actstc", "zavod"})
@Entity
@Table(name = "live_param", schema = "t-base_cz")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class LiveParam {
    @Id
    @Column(columnDefinition = "int default 0")
    private int id;
    private String nazev;
    @Column(columnDefinition = "int default 0")
    private int last;
    @Column(columnDefinition = "int default 0")
    private int round;
    @Column(columnDefinition = "int default 0")
    private int typ;
    @Column(columnDefinition = "int default 0")
    private int pocdes;
    @Column(columnDefinition = "tinyint(1)")
    private Byte cam1;
    @Column(columnDefinition = "tinyint(1)")
    private Byte cam2;
    @Column(columnDefinition = "tinyint(1)")
    private Byte cam3;
    @Column(columnDefinition = "tinyint(1)")
    private Byte cam4;
    private int pocetcasu;
    @OneToOne
    @JoinColumn(name = "actstc",columnDefinition = "int default 0")
    private Atlet actstc;
//    private int actstc;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_kalendar")
    @JsonIgnore
    private Zavod zavod;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LiveParam liveParam = (LiveParam) o;

        if (id != liveParam.id) return false;
        if (round != liveParam.round) return false;
        if (last != liveParam.last) return false;
        if (typ != liveParam.typ) return false;
        if (pocdes != liveParam.pocdes) return false;
        if (pocetcasu != liveParam.pocetcasu) return false;
        if (nazev != null ? !nazev.equals(liveParam.nazev) : liveParam.nazev != null) return false;
        if (cam1 != null ? !cam1.equals(liveParam.cam1) : liveParam.cam1 != null) return false;
        if (cam2 != null ? !cam2.equals(liveParam.cam2) : liveParam.cam2 != null) return false;
        if (cam3 != null ? !cam3.equals(liveParam.cam3) : liveParam.cam3 != null) return false;
        if (cam4 != null ? !cam4.equals(liveParam.cam4) : liveParam.cam4 != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (nazev != null ? nazev.hashCode() : 0);
        result = 31 * result + round;
        result = 31 * result + last;
        result = 31 * result + typ;
        result = 31 * result + pocdes;
        result = 31 * result + (cam1 != null ? cam1.hashCode() : 0);
        result = 31 * result + (cam2 != null ? cam2.hashCode() : 0);
        result = 31 * result + (cam3 != null ? cam3.hashCode() : 0);
        result = 31 * result + (cam4 != null ? cam4.hashCode() : 0);
        result = 31 * result + pocetcasu;
        return result;
    }
}
