package com.example.live.results.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Data
@NoArgsConstructor
@Entity
@Table(name = "live_result", schema = "t-base_cz")
public class Atlet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; //better Long
    @Column(columnDefinition = "int default 0")
    private int flg;
    @Column(columnDefinition = "int default 0")
    private int poradi;

    @Column(name = "id_kategorie", columnDefinition = "int default 0")
    private int idKategorie;
    private String jmeno;
    @Column(columnDefinition = "varchar(4)", nullable = false)
    private String tj;
    @Column(nullable = false)
    private String klub;
    @Column(columnDefinition = "int default 0")
    private int cas1;
    @Column(columnDefinition = "int default 0")
    private int cas2;
    @Column(columnDefinition = "int default 0")
    private int cas3;
    @Column(columnDefinition = "int default 0")
    private int cas4;
    @Column(columnDefinition = "int default 0")
    private int cas5;
    @Column(columnDefinition = "int default 0")
    private int cas6;
    @Column(columnDefinition = "int default 0")
    private int cas7;
    @Column(columnDefinition = "int default 0")
    private int cas8;
    @Column(columnDefinition = "int default 0")
    private int cas9;
    @Column(columnDefinition = "int default 0")
    private int cas10;
    @Column(columnDefinition = "int default 0")
    private int cas;
    @Column(columnDefinition = "int default 0")
    private int body;
    @Column(columnDefinition = "varchar(3)", nullable = false)
    private String zkrkat;
    @Column(columnDefinition = "varchar(4)", nullable = false)
    private String bib;
    @Column(columnDefinition = "int default 0")
    private int mcas1;
    @Column(columnDefinition = "int default 0")
    private int mcas2;
    @Column(columnDefinition = "int default 0")
    private int mcas3;
    @Column(columnDefinition = "int default 0")
    private int mcas4;
    @Column(columnDefinition = "int default 0")
    private int mcas5;
    @Column(columnDefinition = "int default 0")
    private int mcas6;
    @Column(columnDefinition = "int default 0")
    private int mcas7;
    @Column(columnDefinition = "int default 0")
    private int mcas8;
    @Column(columnDefinition = "int default 0")
    private int mcas9;
    @Column(columnDefinition = "int default 0")
    private int mcas10;
    @Column(columnDefinition = "int default 0")
    private int speed1;
    @Column(columnDefinition = "int default 0")
    private int speed2;
    @Column(columnDefinition = "int default 0")
    private int speed3;
    @Column(columnDefinition = "int default 0")
    private int speed4;
    @Column(columnDefinition = "int default 0")
    private int speed5;
    @Column(columnDefinition = "int default 0")
    private int speed6;
    @Column(columnDefinition = "int default 0")
    private int speed7;
    @Column(columnDefinition = "int default 0")
    private int speed8;
    @Column(columnDefinition = "int default 0")
    private int speed9;
    @Column(columnDefinition = "int default 0")
    private int speed10;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "stc")
    @JsonIgnore
    private LiveParam liveParam;

     @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Atlet that = (Atlet) o;

        if (id != that.id) return false;
        if (flg != that.flg) return false;
        if (poradi != that.poradi) return false;
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
//        result = 31 * result + idKategorie;
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
