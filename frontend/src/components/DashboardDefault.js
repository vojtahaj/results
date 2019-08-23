import React from 'react';
import DashboardDefaultCalendar from "./DashboardCalendar";

class DashboardDefault extends React.Component {
    render() {
        return (
            <>
            <div>Vítejte v time-H.cz Datacenter, nejbližší závody:</div>
            <p>&nbsp;</p>
            <DashboardDefaultCalendar/>
            </>
        )
    }
}
export default DashboardDefault;