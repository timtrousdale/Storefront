import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'


class Cart extends Component {


    returnToProducts(history) {
        history.push('/products')
    }

    // onClick={() => this.redirectToProduct(this.props.history)}


    render() {
        let cartItems;
        if ( this.props.isLoggedIn === true ) {


            cartItems = this.props.cart.map(item => (
                <div key={this.props.cart.indexOf(item)}>
                    <CartItem item={item} index={this.props.cart.indexOf(item)} />
                </div>

            ));

            return (
                <div className="content">
                    <h1 className={`cart-header`}>
                        My Cart
                    </h1>
                    <div className={'float'} onClick={() => this.returnToProducts(this.props.history)}>
                        <i className="fas fa-chevron-left"><span className={'inside-fas'}>Back to Products</span></i>
                    </div>
                    <div className={`cart-list`}>
                        {cartItems}
                        <hr/>

                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h3 className={'center'}>
                        You Need to be <Link to="/login">logged in</Link> ...
                    </h3>
                </div>
            )
        }
    }
}


const mapStateToProps = (store) => {
    return {
        cart: store.cart.cart,
        isLoggedIn: store.states.isLoggedIn
    };
};


export default connect(mapStateToProps, { })(Cart);