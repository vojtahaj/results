import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderApp = (config) => {
    ReactDOM.render(<App _config={config}/>, document.getElementById('root'))
};
// ReactDOM.render(<h1>hello world!</h1>, document.getElementById('root'));
//ReactDOM.render(<ShoppingList />, document.getElementById('shoppinglist'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
