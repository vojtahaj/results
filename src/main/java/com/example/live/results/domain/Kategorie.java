package com.example.live.results.domain;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Kategorie {
    private int id;
    private int idZavodu;
    private int kat;
    private String nazev;
    private String delka;
    private String styl;
    private int odroku;
    private int doroku;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "id_zavodu")
    public int getIdZavodu() {
        return idZavodu;
    }

    public void setIdZavodu(int idZavodu) {
        this.idZavodu = idZavodu;
    }

    @Basic
    @Column(name = "kat")
    public int getKat() {
        return kat;
    }

    public void setKat(int kat) {
        this.kat = kat;
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
    @Column(name = "delka")
    public String getDelka() {
        return delka;
    }

    public void setDelka(String delka) {
        this.delka = delka;
    }

    @Basic
    @Column(name = "styl")
    public String getStyl() {
        return styl;
    }

    public void setStyl(String styl) {
        this.styl = styl;
    }

    @Basic
    @Column(name = "odroku")
    public int getOdroku() {
        return odroku;
    }

    public void setOdroku(int odroku) {
        this.odroku = odroku;
    }

    @Basic
    @Column(name = "doroku")
    public int getDoroku() {
        return doroku;
    }

    public void setDoroku(int doroku) {
        this.doroku = doroku;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Kategorie kategorie = (Kategorie) o;

        if (id != kategorie.id) return false;
        if (idZavodu != kategorie.idZavodu) return false;
        if (kat != kategorie.kat) return false;
        if (odroku != kategorie.odroku) return false;
        if (doroku != kategorie.doroku) return false;
        if (nazev != null ? !nazev.equals(kategorie.nazev) : kategorie.nazev != null) return false;
        if (delka != null ? !delka.equals(kategorie.delka) : kategorie.delka != null) return false;
        if (styl != null ? !styl.equals(kategorie.styl) : kategorie.styl != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + idZavodu;
        result = 31 * result + kat;
        result = 31 * result + (nazev != null ? nazev.hashCode() : 0);
        result = 31 * result + (delka != null ? delka.hashCode() : 0);
        result = 31 * result + (styl != null ? styl.hashCode() : 0);
        result = 31 * result + odroku;
        result = 31 * result + doroku;
        return result;
    }
}
