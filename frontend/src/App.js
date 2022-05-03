import React, {Component} from 'react';
import './App.css';
import ResponsiveDrawer from './components/ResponsiveDrawer'
import {BrowserRouter} from "react-router-dom";
import DashboardCategoryDetailStomp from "./components/dashboards/DashboardCategoryDetailStomp";
import DashboardLiveRaces from "./components/dashboards/DashboardLiveRaces";
import config from './configData.json'

class App extends Component {
    constructor(props) {
        super(props);
        config.SERVER_URL = this.props._config.SERVER_URL;
    }
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

