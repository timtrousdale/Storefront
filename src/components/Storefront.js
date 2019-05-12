import React from 'react';
import { connect } from 'react-redux'
import Loader from './Loader'
import Router from './Router'
import { Link } from 'react-router-dom'

class Storefront extends React.Component {

    render() {
        let links;
        if ( this.props.isLoggedIn === true ) {
            links = (
                <Link to="/cart"><i className="fas fa-shopping-cart go-to-cart"></i></Link>
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


const mapStoreToProps = (store) => {
    return {
        isLoggedIn: store.states.isLoggedIn
    };
};

export default connect(mapStoreToProps, {})(Storefront);


