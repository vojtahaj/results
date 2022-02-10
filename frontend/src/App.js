import React, {Component} from 'react';
import './App.css';
import ResponsiveDrawer from './components/ResponsiveDrawer'
import {BrowserRouter} from "react-router-dom";
import DashboardCategoryDetailStomp from "./components/dashboards/DashboardCategoryDetailStomp";
import DashboardLiveRaces from "./components/dashboards/DashboardLiveRaces";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    {/*<DashboardCategoryDetailStomp/>*/}
                    <DashboardLiveRaces/>
                    {/*<ResponsiveDrawer/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

