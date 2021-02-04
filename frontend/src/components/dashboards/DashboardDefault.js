import React from 'react';
import DashboardDefaultCalendar from "./DashboardCalendar";

class DashboardDefault extends React.Component {
    render() {
        return (
            <>
            <div>Vítejte v time-H.cz Datacenter. Časoměrná skupina se zabývá měřením především závodů v běhu na lyžích,
                sjezdovém lyžování, ale také závodů v motoristických sprintech nebo cyklistické časovky. Nedisponujeme čipovou technologií.
                Nejbližší závody:
            </div>
            <DashboardDefaultCalendar/>
            </>
        )
    }
}

export default DashboardDefault;