package com.example.live.results.domain;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Kalendar {
    private int id;
    private int datum;
    private String misto;
    private String discipl;
    private String nazev;
    private String poradatel;
    private String porlogo;
    private String team;
    private int idZavodu;
    private String popis;
    private String tj;
    private String drSou;
    private short stav;
    private int last;
    private int numdes;
    private int rank;
    private String text;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "datum")
    public int getDatum() {
        return datum;
    }

    public void setDatum(int datum) {
        this.datum = datum;
    }

    @Basic
    @Column(name = "misto")
    public String getMisto() {
        return misto;
    }

    public void setMisto(String misto) {
        this.misto = misto;
    }

    @Basic
    @Column(name = "discipl")
    public String getDiscipl() {
        return discipl;
    }

    public void setDiscipl(String discipl) {
        this.discipl = discipl;
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
    @Column(name = "poradatel")
    public String getPoradatel() {
        return poradatel;
    }

    public void setPoradatel(String poradatel) {
        this.poradatel = poradatel;
    }

    @Basic
    @Column(name = "porlogo")
    public String getPorlogo() {
        return porlogo;
    }

    public void setPorlogo(String porlogo) {
        this.porlogo = porlogo;
    }

    @Basic
    @Column(name = "team")
    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
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
    @Column(name = "popis")
    public String getPopis() {
        return popis;
    }

    public void setPopis(String popis) {
        this.popis = popis;
    }

    @Basic
    @Column(name = "tj")
    public String getTj() {
        return tj;
    }

    public void setTj(String tj) {
        this.tj = tj;
    }

    @Basic
    @Column(name = "dr_sou")
    public String getDrSou() {
        return drSou;
    }

    public void setDrSou(String drSou) {
        this.drSou = drSou;
    }

    @Basic
    @Column(name = "stav")
    public short getStav() {
        return stav;
    }

    public void setStav(short stav) {
        this.stav = stav;
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
    @Column(name = "numdes")
    public int getNumdes() {
        return numdes;
    }

    public void setNumdes(int numdes) {
        this.numdes = numdes;
    }

    @Basic
    @Column(name = "rank")
    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    @Basic
    @Column(name = "text")
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Kalendar kalendar = (Kalendar) o;

        if (id != kalendar.id) return false;
        if (datum != kalendar.datum) return false;
        if (idZavodu != kalendar.idZavodu) return false;
        if (stav != kalendar.stav) return false;
        if (last != kalendar.last) return false;
        if (numdes != kalendar.numdes) return false;
        if (rank != kalendar.rank) return false;
        if (misto != null ? !misto.equals(kalendar.misto) : kalendar.misto != null) return false;
        if (discipl != null ? !discipl.equals(kalendar.discipl) : kalendar.discipl != null) return false;
        if (nazev != null ? !nazev.equals(kalendar.nazev) : kalendar.nazev != null) return false;
        if (poradatel != null ? !poradatel.equals(kalendar.poradatel) : kalendar.poradatel != null) return false;
        if (porlogo != null ? !porlogo.equals(kalendar.porlogo) : kalendar.porlogo != null) return false;
        if (team != null ? !team.equals(kalendar.team) : kalendar.team != null) return false;
        if (popis != null ? !popis.equals(kalendar.popis) : kalendar.popis != null) return false;
        if (tj != null ? !tj.equals(kalendar.tj) : kalendar.tj != null) return false;
        if (drSou != null ? !drSou.equals(kalendar.drSou) : kalendar.drSou != null) return false;
        if (text != null ? !text.equals(kalendar.text) : kalendar.text != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + datum;
        result = 31 * result + (misto != null ? misto.hashCode() : 0);
        result = 31 * result + (discipl != null ? discipl.hashCode() : 0);
        result = 31 * result + (nazev != null ? nazev.hashCode() : 0);
        result = 31 * result + (poradatel != null ? poradatel.hashCode() : 0);
        result = 31 * result + (porlogo != null ? porlogo.hashCode() : 0);
        result = 31 * result + (team != null ? team.hashCode() : 0);
        result = 31 * result + idZavodu;
        result = 31 * result + (popis != null ? popis.hashCode() : 0);
        result = 31 * result + (tj != null ? tj.hashCode() : 0);
        result = 31 * result + (drSou != null ? drSou.hashCode() : 0);
        result = 31 * result + (int) stav;
        result = 31 * result + last;
        result = 31 * result + numdes;
        result = 31 * result + rank;
        result = 31 * result + (text != null ? text.hashCode() : 0);
        return result;
    }
}
