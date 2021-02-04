import React from 'react';
import '../css/timeh.css';
import DashboardCategoryDetailStomp from "./dashboards/DashboardCategoryDetailStomp";

class RaceList extends React.Component {

    render() {
        return <DashboardCategoryDetailStomp raceId={this.props.match.params.id}/>
    }
}

export default RaceList;