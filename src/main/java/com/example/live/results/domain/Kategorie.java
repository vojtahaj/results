package com.example.live.results.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@ToString(exclude = "zavod")
@Table(name = "kategorie", schema = "t-base_cz")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Kategorie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne//(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_zavodu")
    @JsonBackReference
    private Zavod zavod;

    @OneToMany(mappedBy = "idKategorie")
    @Column(name = "kat")
    private List<Atlet> atlets;
//     private int kat;

    @Column(nullable = false)
    private String nazev;
    @Column(nullable = false)
    private String delka;
    @Column(nullable = false)
    private String styl;
    @Column(columnDefinition = "int default 0")
    private int odroku;
    @Column(columnDefinition = "int default 0")
    private int doroku;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Kategorie kategorie = (Kategorie) o;

        if (id != kategorie.id) return false;
//        if (kat != kategorie.kat) return false;
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
//        result = 31 * result + kat;
        result = 31 * result + (nazev != null ? nazev.hashCode() : 0);
        result = 31 * result + (delka != null ? delka.hashCode() : 0);
        result = 31 * result + (styl != null ? styl.hashCode() : 0);
        result = 31 * result + odroku;
        result = 31 * result + doroku;
        return result;
    }

}
