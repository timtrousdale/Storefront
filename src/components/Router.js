import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from "./Login";
import ProductsList from './ProductsList'
import Cart from "./Cart";
import Error404 from "./Error404";
import { Route, Switch, withRouter } from 'react-router-dom'
import ProductDetails from "./ProductDetails";

class Router extends Component {

    componentDidMount() {
        if (this.props.isLoggedIn === false) {
            this.props.history.push('/login')
        }
    }

    render() {



        return (
            <Switch>

                <Route path={"/Storefront/login"} component={Login} history={this.props.history} exact />
                <Route path={"/Storefront/products"} component={ProductsList} history={this.props.history} exact />
                <Route path={"/Storefront/products/:id"} component={ProductDetails} history={this.props.history} exact />
                <Route path={"/Storefront/cart"} component={Cart} history={this.props.history} exact />

                <Route  component={Error404}  />

            </Switch>
        );

    }
}


const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.states.isLoggedIn
    };
};

export default withRouter(connect(mapStateToProps, {})(Router));

