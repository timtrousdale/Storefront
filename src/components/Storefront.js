import React from 'react';
import { connect, Provider } from 'react-redux'
import store from '../store'
import Loader from './Loader'
import Router from './Router'
import { Link } from 'react-router-dom'

class Storefront extends React.Component {

    render() {
        let links;
        if ( this.props.isLoggedIn === true ) {
            links = (
                <div>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                </div>


            )
        }
        return (
            <div>
                <Loader/>
                <div className="App Container">
                    <header className="header">
                        <h1>
                            <span className={`overline`}>the</span> Store
                        </h1>
                        {links}
                    </header>
                    <hr/>

                    <Router/>


                </div>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.states.isLoggedIn
    };
};

export default connect(mapStateToProps, {})(Storefront);


