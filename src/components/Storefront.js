import React from 'react';
import ProductsList from './ProductsList'
import { Provider } from 'react-redux'
import store from '../store'
import Login from './Login'
import Loader from './Loader'

export default class Storefront extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Loader />
                <div className="star-five"></div>
                <div className="App Container">
                    <header className="header">
                        <h1>
                            <span className={`overline`}>the</span> Store
                        </h1>
                    </header>

                    <Login/>
                    <hr/>

                    <div className="content">
                        <ProductsList/>
                    </div>
                </div>
            </Provider>
        )
    }
}
