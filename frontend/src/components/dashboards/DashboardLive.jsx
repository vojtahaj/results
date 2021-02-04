import React from 'react';
import '../../css/timeh.css';
import RaceList from "../RaceList.jsx";
import {Route, Switch} from "react-router-dom";
import DashboardCalendar from "./DashboardCalendar";

const DashboardLive = () => {

    return <>
    <Switch>
        <Route exact path={"/live"} component={DashboardCalendar}/>
        <Route path="/live/:id" component={RaceList}/>
    </Switch>
    </>
};

export default DashboardLive;