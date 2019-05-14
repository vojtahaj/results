import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleTable from './components/SimpleTable'
import ResponsiveDrawer from './components/ResponsiveDrawer'

class App extends Component {
    render() {
        return (
            <div className="App">

                {/*<SimpleTable />*/}
                <ResponsiveDrawer/>
            </div>
        );
    }
}

export default App;

