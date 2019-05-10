import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductsList from './ProductsList'
import Login from "./Login";
import Error404 from "./Error404";
import { Route, Switch, withRouter } from 'react-router-dom'

class Router extends Component {

    componentDidMount() {
        if (this.props.isLoggedIn === false) {
            this.props.history.push('/login')
        }
    }

    render() {



        return (
            <Switch>

                <Route path={"/login"} component={Login} exact history={this.props.history} />
                <Route path={"/products"} component={ProductsList} exact />
                <Route path={"/cart"} component={ProductsList} exact />
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

