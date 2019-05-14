import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleTable from './components/SimpleTable'

class App extends Component {
    render() {
        return (
            <div className="App">

                <SimpleTable />
            </div>
        );
    }
}

export default App;

class ShoppingList extends Component {
    render() {
        return (<div className="shoppingList">
                <h1>shoppinglist pro {this.props.name}</h1>
                <ul>
                    <li>polozka 1</li>
                    <li>polozka 2</li>
                    <li>polozka 3</li>
                </ul>
            </div>
        )
    }
}

