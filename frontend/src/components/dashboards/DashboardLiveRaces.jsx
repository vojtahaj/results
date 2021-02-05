import React, {useState} from 'react'
import DashboardCategoryDetailStomp from "./DashboardCategoryDetailStomp";
import DashboardCalendar from "./DashboardCalendar";
import Calls from "../../server/Calls";
import MenuLiveRaces from "../MenuLiveRaces";

class DashboardLiveRaces extends React.Component {
   state = {
       liveRaces: []
   };
    componentDidMount() {
    }
    constructor(){
        super();
        Calls.getRaceActive().then((response) => {
            this.setState({liveRaces: response.data});
            // console.log(this.state.liveRaces);
            // console.log(this.state.liveRaces.length)
            // console.log("liverace ID: "+ this.state.liveRaces[0].id);
        }).catch((err) => console.log(err));
    }

    render() {
        if (this.state.liveRaces.length === 1)
            return <DashboardCategoryDetailStomp raceId={this.state.liveRaces[0].id}/>;
        else if (this.state.liveRaces.length === 0)
            return <><p>Žádný závod není právě online, seznam nejbližších závodů:</p><DashboardCalendar/></>;
        else if (this.state.liveRaces.length > 1)
            return <>
            <p>Vyberte závod, který chcete sledovat:</p>
            <MenuLiveRaces races={this.state.liveRaces}/>
            <DashboardCategoryDetailStomp raceId={this.state.liveRaces[0].id}/>;
            </>;
        return <p>xxx</p>
    }
}

export default DashboardLiveRaces;