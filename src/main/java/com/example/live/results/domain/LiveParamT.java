package com.example.live.results.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@ToString(exclude = {"actstc", "zavod"})
@Entity
@Table(name = "live_param_t", schema = "t-base_cz")
public class LiveParamT {
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
    @JsonIgnore
    private Byte cam1;
    @Column(columnDefinition = "tinyint(1)")
    @JsonIgnore
    private Byte cam2;
    @Column(columnDefinition = "tinyint(1)")
    @JsonIgnore
    private Byte cam3;
    @Column(columnDefinition = "tinyint(1)")
    @JsonIgnore
    private Byte cam4;
    private int pocetcasu;
    private int actstc;

    @Column(name = "id_kalendar")
    @JsonIgnore
    private int zavod;

    private int zpracovan;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof LiveParamT)) return false;
        if (!super.equals(o)) return false;

        LiveParamT that = (LiveParamT) o;

        if (getId() != that.getId()) return false;
        if (getLast() != that.getLast()) return false;
        if (getRound() != that.getRound()) return false;
        if (getTyp() != that.getTyp()) return false;
        if (getPocdes() != that.getPocdes()) return false;
        if (getPocetcasu() != that.getPocetcasu()) return false;
        if (getActstc() != that.getActstc()) return false;
        if (getZavod() != that.getZavod()) return false;
        if (getZpracovan() != that.getZpracovan()) return false;
        if (getNazev() != null ? !getNazev().equals(that.getNazev()) : that.getNazev() != null) return false;
        if (getCam1() != null ? !getCam1().equals(that.getCam1()) : that.getCam1() != null) return false;
        if (getCam2() != null ? !getCam2().equals(that.getCam2()) : that.getCam2() != null) return false;
        if (getCam3() != null ? !getCam3().equals(that.getCam3()) : that.getCam3() != null) return false;
        return getCam4() != null ? getCam4().equals(that.getCam4()) : that.getCam4() == null;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + getId();
        result = 31 * result + (getNazev() != null ? getNazev().hashCode() : 0);
        result = 31 * result + getLast();
        result = 31 * result + getRound();
        result = 31 * result + getTyp();
        result = 31 * result + getPocdes();
        result = 31 * result + (getCam1() != null ? getCam1().hashCode() : 0);
        result = 31 * result + (getCam2() != null ? getCam2().hashCode() : 0);
        result = 31 * result + (getCam3() != null ? getCam3().hashCode() : 0);
        result = 31 * result + (getCam4() != null ? getCam4().hashCode() : 0);
        result = 31 * result + getPocetcasu();
        result = 31 * result + getActstc();
        result = 31 * result + getZavod();
        result = 31 * result + getZpracovan();
        return result;
    }
}
