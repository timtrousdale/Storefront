import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Storefront from './components/Storefront';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(<Provider store={store}>
    <HashRouter><Storefront /></HashRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
