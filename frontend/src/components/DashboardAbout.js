import React from 'react';
import '../css/timeh.css';

class DashboardAbout extends React.Component {

    render() {
        return (
            <p>
                Projekt time-H.cz Datacenter vzniká jako studentská práce. Primárním cílem je podpora a
                zlepšení služeb měřící skupiny. Lze očekávat, že projekt bude dále vyvíjen.
                V Menu je k vybrání možnost zobrazení Live závodů a kalendáře závodů. Po kliknutí na Live závody
                se zobrazí rozbalovací nabídka s kategoriemi závodu. Po vybrání kategorie se automaticky začne obnovovat
                tabulka s výsledky a událostmi.
                Lze také vyhledat atleta dle startovního čísla - zobrazí se jeho stč. jméno, klub, a stav (v cíli, na startu...).
                Po kliknutí na vyhledaného závodníka lze zobrazit aktuální výsledky v jeho kategorii.
                Lze očekávat, že se aplikace bude dále vyvíjet - přihlašování k závodu, úpravy ve zobrazení výsledků, responzivita designu apod.
                S velkou pravděpodobností nebude možné poskytovat WS API třetí straně.
            </p>

        )
    }
}

export default DashboardAbout;