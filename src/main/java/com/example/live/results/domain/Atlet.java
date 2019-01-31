package com.example.live.results.domain;

import javax.persistence.*;

@Entity
@Table(name = "live_result", schema = "t-base_cz")
public class Atlet {
    private int id;
    private int flg;
    private int poradi;
    private int stc;
    private int idKategorie;
    private String jmeno;
    private String tj;
    private String klub;
    private int cas1;
    private int cas2;
    private int cas3;
    private int cas4;
    private int cas5;
    private int cas6;
    private int cas7;
    private int cas8;
    private int cas9;
    private int cas10;
    private int cas;
    private int body;
    private String zkrkat;
    private String bib;
    private int mcas1;
    private int mcas2;
    private int mcas3;
    private int mcas4;
    private int mcas5;
    private int mcas6;
    private int mcas7;
    private int mcas8;
    private int mcas9;
    private int mcas10;
    private int speed1;
    private int speed2;
    private int speed3;
    private int speed4;
    private int speed5;
    private int speed6;
    private int speed7;
    private int speed8;
    private int speed9;
    private int speed10;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "flg")
    public int getFlg() {
        return flg;
    }

    public void setFlg(int flg) {
        this.flg = flg;
    }

    @Basic
    @Column(name = "poradi")
    public int getPoradi() {
        return poradi;
    }

    public void setPoradi(int poradi) {
        this.poradi = poradi;
    }

    @Basic
    @Column(name = "stc")
    public int getStc() {
        return stc;
    }

    public void setStc(int stc) {
        this.stc = stc;
    }

    @Basic
    @Column(name = "id_kategorie")
    public int getIdKategorie() {
        return idKategorie;
    }

    public void setIdKategorie(int idKategorie) {
        this.idKategorie = idKategorie;
    }

    @Basic
    @Column(name = "jmeno")
    public String getJmeno() {
        return jmeno;
    }

    public void setJmeno(String jmeno) {
        this.jmeno = jmeno;
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
    @Column(name = "klub")
    public String getKlub() {
        return klub;
    }

    public void setKlub(String klub) {
        this.klub = klub;
    }

    @Basic
    @Column(name = "cas1")
    public int getCas1() {
        return cas1;
    }

    public void setCas1(int cas1) {
        this.cas1 = cas1;
    }

    @Basic
    @Column(name = "cas2")
    public int getCas2() {
        return cas2;
    }

    public void setCas2(int cas2) {
        this.cas2 = cas2;
    }

    @Basic
    @Column(name = "cas3")
    public int getCas3() {
        return cas3;
    }

    public void setCas3(int cas3) {
        this.cas3 = cas3;
    }

    @Basic
    @Column(name = "cas4")
    public int getCas4() {
        return cas4;
    }

    public void setCas4(int cas4) {
        this.cas4 = cas4;
    }

    @Basic
    @Column(name = "cas5")
    public int getCas5() {
        return cas5;
    }

    public void setCas5(int cas5) {
        this.cas5 = cas5;
    }

    @Basic
    @Column(name = "cas6")
    public int getCas6() {
        return cas6;
    }

    public void setCas6(int cas6) {
        this.cas6 = cas6;
    }

    @Basic
    @Column(name = "cas7")
    public int getCas7() {
        return cas7;
    }

    public void setCas7(int cas7) {
        this.cas7 = cas7;
    }

    @Basic
    @Column(name = "cas8")
    public int getCas8() {
        return cas8;
    }

    public void setCas8(int cas8) {
        this.cas8 = cas8;
    }

    @Basic
    @Column(name = "cas9")
    public int getCas9() {
        return cas9;
    }

    public void setCas9(int cas9) {
        this.cas9 = cas9;
    }

    @Basic
    @Column(name = "cas10")
    public int getCas10() {
        return cas10;
    }

    public void setCas10(int cas10) {
        this.cas10 = cas10;
    }

    @Basic
    @Column(name = "cas")
    public int getCas() {
        return cas;
    }

    public void setCas(int cas) {
        this.cas = cas;
    }

    @Basic
    @Column(name = "body")
    public int getBody() {
        return body;
    }

    public void setBody(int body) {
        this.body = body;
    }

    @Basic
    @Column(name = "zkrkat")
    public String getZkrkat() {
        return zkrkat;
    }

    public void setZkrkat(String zkrkat) {
        this.zkrkat = zkrkat;
    }

    @Basic
    @Column(name = "bib")
    public String getBib() {
        return bib;
    }

    public void setBib(String bib) {
        this.bib = bib;
    }

    @Basic
    @Column(name = "mcas1")
    public int getMcas1() {
        return mcas1;
    }

    public void setMcas1(int mcas1) {
        this.mcas1 = mcas1;
    }

    @Basic
    @Column(name = "mcas2")
    public int getMcas2() {
        return mcas2;
    }

    public void setMcas2(int mcas2) {
        this.mcas2 = mcas2;
    }

    @Basic
    @Column(name = "mcas3")
    public int getMcas3() {
        return mcas3;
    }

    public void setMcas3(int mcas3) {
        this.mcas3 = mcas3;
    }

    @Basic
    @Column(name = "mcas4")
    public int getMcas4() {
        return mcas4;
    }

    public void setMcas4(int mcas4) {
        this.mcas4 = mcas4;
    }

    @Basic
    @Column(name = "mcas5")
    public int getMcas5() {
        return mcas5;
    }

    public void setMcas5(int mcas5) {
        this.mcas5 = mcas5;
    }

    @Basic
    @Column(name = "mcas6")
    public int getMcas6() {
        return mcas6;
    }

    public void setMcas6(int mcas6) {
        this.mcas6 = mcas6;
    }

    @Basic
    @Column(name = "mcas7")
    public int getMcas7() {
        return mcas7;
    }

    public void setMcas7(int mcas7) {
        this.mcas7 = mcas7;
    }

    @Basic
    @Column(name = "mcas8")
    public int getMcas8() {
        return mcas8;
    }

    public void setMcas8(int mcas8) {
        this.mcas8 = mcas8;
    }

    @Basic
    @Column(name = "mcas9")
    public int getMcas9() {
        return mcas9;
    }

    public void setMcas9(int mcas9) {
        this.mcas9 = mcas9;
    }

    @Basic
    @Column(name = "mcas10")
    public int getMcas10() {
        return mcas10;
    }

    public void setMcas10(int mcas10) {
        this.mcas10 = mcas10;
    }

    @Basic
    @Column(name = "speed1")
    public int getSpeed1() {
        return speed1;
    }

    public void setSpeed1(int speed1) {
        this.speed1 = speed1;
    }

    @Basic
    @Column(name = "speed2")
    public int getSpeed2() {
        return speed2;
    }

    public void setSpeed2(int speed2) {
        this.speed2 = speed2;
    }

    @Basic
    @Column(name = "speed3")
    public int getSpeed3() {
        return speed3;
    }

    public void setSpeed3(int speed3) {
        this.speed3 = speed3;
    }

    @Basic
    @Column(name = "speed4")
    public int getSpeed4() {
        return speed4;
    }

    public void setSpeed4(int speed4) {
        this.speed4 = speed4;
    }

    @Basic
    @Column(name = "speed5")
    public int getSpeed5() {
        return speed5;
    }

    public void setSpeed5(int speed5) {
        this.speed5 = speed5;
    }

    @Basic
    @Column(name = "speed6")
    public int getSpeed6() {
        return speed6;
    }

    public void setSpeed6(int speed6) {
        this.speed6 = speed6;
    }

    @Basic
    @Column(name = "speed7")
    public int getSpeed7() {
        return speed7;
    }

    public void setSpeed7(int speed7) {
        this.speed7 = speed7;
    }

    @Basic
    @Column(name = "speed8")
    public int getSpeed8() {
        return speed8;
    }

    public void setSpeed8(int speed8) {
        this.speed8 = speed8;
    }

    @Basic
    @Column(name = "speed9")
    public int getSpeed9() {
        return speed9;
    }

    public void setSpeed9(int speed9) {
        this.speed9 = speed9;
    }

    @Basic
    @Column(name = "speed10")
    public int getSpeed10() {
        return speed10;
    }

    public void setSpeed10(int speed10) {
        this.speed10 = speed10;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Atlet that = (Atlet) o;

        if (id != that.id) return false;
        if (flg != that.flg) return false;
        if (poradi != that.poradi) return false;
        if (stc != that.stc) return false;
        if (idKategorie != that.idKategorie) return false;
        if (cas1 != that.cas1) return false;
        if (cas2 != that.cas2) return false;
        if (cas3 != that.cas3) return false;
        if (cas4 != that.cas4) return false;
        if (cas5 != that.cas5) return false;
        if (cas6 != that.cas6) return false;
        if (cas7 != that.cas7) return false;
        if (cas8 != that.cas8) return false;
        if (cas9 != that.cas9) return false;
        if (cas10 != that.cas10) return false;
        if (cas != that.cas) return false;
        if (body != that.body) return false;
        if (mcas1 != that.mcas1) return false;
        if (mcas2 != that.mcas2) return false;
        if (mcas3 != that.mcas3) return false;
        if (mcas4 != that.mcas4) return false;
        if (mcas5 != that.mcas5) return false;
        if (mcas6 != that.mcas6) return false;
        if (mcas7 != that.mcas7) return false;
        if (mcas8 != that.mcas8) return false;
        if (mcas9 != that.mcas9) return false;
        if (mcas10 != that.mcas10) return false;
        if (speed1 != that.speed1) return false;
        if (speed2 != that.speed2) return false;
        if (speed3 != that.speed3) return false;
        if (speed4 != that.speed4) return false;
        if (speed5 != that.speed5) return false;
        if (speed6 != that.speed6) return false;
        if (speed7 != that.speed7) return false;
        if (speed8 != that.speed8) return false;
        if (speed9 != that.speed9) return false;
        if (speed10 != that.speed10) return false;
        if (jmeno != null ? !jmeno.equals(that.jmeno) : that.jmeno != null) return false;
        if (tj != null ? !tj.equals(that.tj) : that.tj != null) return false;
        if (klub != null ? !klub.equals(that.klub) : that.klub != null) return false;
        if (zkrkat != null ? !zkrkat.equals(that.zkrkat) : that.zkrkat != null) return false;
        if (bib != null ? !bib.equals(that.bib) : that.bib != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + flg;
        result = 31 * result + poradi;
        result = 31 * result + stc;
        result = 31 * result + idKategorie;
        result = 31 * result + (jmeno != null ? jmeno.hashCode() : 0);
        result = 31 * result + (tj != null ? tj.hashCode() : 0);
        result = 31 * result + (klub != null ? klub.hashCode() : 0);
        result = 31 * result + cas1;
        result = 31 * result + cas2;
        result = 31 * result + cas3;
        result = 31 * result + cas4;
        result = 31 * result + cas5;
        result = 31 * result + cas6;
        result = 31 * result + cas7;
        result = 31 * result + cas8;
        result = 31 * result + cas9;
        result = 31 * result + cas10;
        result = 31 * result + cas;
        result = 31 * result + body;
        result = 31 * result + (zkrkat != null ? zkrkat.hashCode() : 0);
        result = 31 * result + (bib != null ? bib.hashCode() : 0);
        result = 31 * result + mcas1;
        result = 31 * result + mcas2;
        result = 31 * result + mcas3;
        result = 31 * result + mcas4;
        result = 31 * result + mcas5;
        result = 31 * result + mcas6;
        result = 31 * result + mcas7;
        result = 31 * result + mcas8;
        result = 31 * result + mcas9;
        result = 31 * result + mcas10;
        result = 31 * result + speed1;
        result = 31 * result + speed2;
        result = 31 * result + speed3;
        result = 31 * result + speed4;
        result = 31 * result + speed5;
        result = 31 * result + speed6;
        result = 31 * result + speed7;
        result = 31 * result + speed8;
        result = 31 * result + speed9;
        result = 31 * result + speed10;
        return result;
    }
}
