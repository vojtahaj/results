package com.example.live.results.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@ToString
@NoArgsConstructor
@Entity
@Table(name = "kalendar", schema = "t-base_cz")
public class Zavod {

    //fixme kde je stejny nazev neni potreba column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(columnDefinition = "int default 0")
    private int datum;
    private String misto;
    private String discipl;
    private String nazev;
    private String poradatel;
    private String porlogo;
    private String team;
    @Column(columnDefinition = "mediumtext")
    private String popis;
    private String tj;
    @Column(name = "dr_Sou")
    private String drSou;
    @Column(columnDefinition = "smallint default 0")
    private short stav;
    @Column(columnDefinition = "int default 0")
    private int last;
    @Column(columnDefinition = "int default 0")
    private int numdes;
    @Column(columnDefinition = "int default 0")
    private int rank;
    private String text;

    @OneToMany(mappedBy = "zavod")
    private List<Kategorie> kategorie;

    @OneToOne
    @JoinColumn(name = "id_zavodu")
    private LiveParam liveParam;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Zavod zavod = (Zavod) o;

        if (id != zavod.id) return false;
        if (datum != zavod.datum) return false;
//        if (idZavodu != zavod.idZavodu) return false;
        if (stav != zavod.stav) return false;
        if (last != zavod.last) return false;
        if (numdes != zavod.numdes) return false;
        if (rank != zavod.rank) return false;
        if (misto != null ? !misto.equals(zavod.misto) : zavod.misto != null) return false;
        if (discipl != null ? !discipl.equals(zavod.discipl) : zavod.discipl != null) return false;
        if (nazev != null ? !nazev.equals(zavod.nazev) : zavod.nazev != null) return false;
        if (poradatel != null ? !poradatel.equals(zavod.poradatel) : zavod.poradatel != null) return false;
        if (porlogo != null ? !porlogo.equals(zavod.porlogo) : zavod.porlogo != null) return false;
        if (team != null ? !team.equals(zavod.team) : zavod.team != null) return false;
        if (popis != null ? !popis.equals(zavod.popis) : zavod.popis != null) return false;
        if (tj != null ? !tj.equals(zavod.tj) : zavod.tj != null) return false;
        if (drSou != null ? !drSou.equals(zavod.drSou) : zavod.drSou != null) return false;
        if (text != null ? !text.equals(zavod.text) : zavod.text != null) return false;

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
//        result = 31 * result + idZavodu;
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
