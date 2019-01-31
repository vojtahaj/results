package com.example.live.results.domain;

import javax.persistence.*;

@Entity
@Table(name = "live_param", schema = "t-base_cz")
public class LiveParam {
    private int id;
    private String nazev;
    private int round;
    private int last;
    private int typ;
    private int idKalendar;
    private int actstc;
    private int pocdes;
    private Byte cam1;
    private Byte cam2;
    private Byte cam3;
    private Byte cam4;
    private int pocetcasu;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "nazev")
    public String getNazev() {
        return nazev;
    }

    public void setNazev(String nazev) {
        this.nazev = nazev;
    }

    @Basic
    @Column(name = "round")
    public int getRound() {
        return round;
    }

    public void setRound(int round) {
        this.round = round;
    }

    @Basic
    @Column(name = "last")
    public int getLast() {
        return last;
    }

    public void setLast(int last) {
        this.last = last;
    }

    @Basic
    @Column(name = "typ")
    public int getTyp() {
        return typ;
    }

    public void setTyp(int typ) {
        this.typ = typ;
    }

    @Basic
    @Column(name = "id_kalendar")
    public int getIdKalendar() {
        return idKalendar;
    }

    public void setIdKalendar(int idKalendar) {
        this.idKalendar = idKalendar;
    }

    @Basic
    @Column(name = "actstc")
    public int getActstc() {
        return actstc;
    }

    public void setActstc(int actstc) {
        this.actstc = actstc;
    }

    @Basic
    @Column(name = "pocdes")
    public int getPocdes() {
        return pocdes;
    }

    public void setPocdes(int pocdes) {
        this.pocdes = pocdes;
    }

    @Basic
    @Column(name = "cam1")
    public Byte getCam1() {
        return cam1;
    }

    public void setCam1(Byte cam1) {
        this.cam1 = cam1;
    }

    @Basic
    @Column(name = "cam2")
    public Byte getCam2() {
        return cam2;
    }

    public void setCam2(Byte cam2) {
        this.cam2 = cam2;
    }

    @Basic
    @Column(name = "cam3")
    public Byte getCam3() {
        return cam3;
    }

    public void setCam3(Byte cam3) {
        this.cam3 = cam3;
    }

    @Basic
    @Column(name = "cam4")
    public Byte getCam4() {
        return cam4;
    }

    public void setCam4(Byte cam4) {
        this.cam4 = cam4;
    }

    @Basic
    @Column(name = "pocetcasu")
    public int getPocetcasu() {
        return pocetcasu;
    }

    public void setPocetcasu(int pocetcasu) {
        this.pocetcasu = pocetcasu;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LiveParam liveParam = (LiveParam) o;

        if (id != liveParam.id) return false;
        if (round != liveParam.round) return false;
        if (last != liveParam.last) return false;
        if (typ != liveParam.typ) return false;
        if (idKalendar != liveParam.idKalendar) return false;
        if (actstc != liveParam.actstc) return false;
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
        result = 31 * result + idKalendar;
        result = 31 * result + actstc;
        result = 31 * result + pocdes;
        result = 31 * result + (cam1 != null ? cam1.hashCode() : 0);
        result = 31 * result + (cam2 != null ? cam2.hashCode() : 0);
        result = 31 * result + (cam3 != null ? cam3.hashCode() : 0);
        result = 31 * result + (cam4 != null ? cam4.hashCode() : 0);
        result = 31 * result + pocetcasu;
        return result;
    }
}
