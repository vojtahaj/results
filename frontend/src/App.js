import React, {Component} from 'react';
import './App.css';
import ResponsiveDrawer from './components/ResponsiveDrawer'
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">

                    <ResponsiveDrawer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

