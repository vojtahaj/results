import React from 'react'
import DashboardCalendar from "./dashboards/DashboardCalendar";
import {Link} from "react-router-dom";

// @params races - seznam zavodu v modu live
class MenuLiveRaces extends React.Component {
    // getDate(date) {
    //     let d = new Date(date * 1000);
    //     let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    //     let month = d.getMonth() < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1);
    //     let year = d.getFullYear();
    //     return day + ". " + month + ". " + year;
    // }

    render() {
        const races = this.props.races;
        // console.log("races: menuliveraces: " + this.props.races);
        return <div>{races.map((race, key) =>
            <p>{DashboardCalendar.getDate(race.datum)} - <Link to={`/live/${race.id}`}>{race.misto}, {race.nazev}</Link></p>
        )}</div>
    }
}

export default MenuLiveRaces;