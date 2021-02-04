import React from 'react';
import '../css/timeh.css';
import DashboardCategoryDetailStomp from "./dashboards/DashboardCategoryDetailStomp";

class RaceList extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return <>{console.log(this.props.match.params.id)}
        <DashboardCategoryDetailStomp raceId={this.props.match.params.id}/>
        <p>Online zavod</p>
        </>
    }
}

export default RaceList;