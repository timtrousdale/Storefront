import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add } from "../actions/cartActions";
import Rating from './Rating'
import { Link } from 'react-router-dom'


class ProductDetails extends Component {


    returnToProducts(history) {
        history.push('/products')
    }
    addToCart(product, history) {
        let item = Object.assign({quantity: 1}, product);
        this.props.add(item);
        history.push('/cart')



    }

    componentDidMount() {
        this.message = false;


    }

    render() {
        const product = this.props.products.filter(product => {
            return (
                product.id === Number(this.props.match.params.id)
            )
        })[0];
        if ( product !== undefined ) {

            return (
                <div className={'product-details'}>
                    <div key={product.id} className={`product`}>
                        <div className={'float'} onClick={() => this.returnToProducts(this.props.history)}>
                        <i className="fas fa-chevron-left"><span className={'inside-fas'}>Back</span></i>
                        </div>
                        <img alt={'product'} className={`list-image`} src={product.img}/>
                        <Rating rating={product.rating}/>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <div className={'payment'}>
                            <p className={'price'}>${product.price}</p>
                            <button
                                className={'cart-button'}
                                onClick={() => this.addToCart(product, this.props.history)}
                            ><i className="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h3 className={'center'}>
                        Sorry, we can't find this page, how about you <Link to="/products">browse our products?</Link> ...
                    </h3>
                </div>
            )
        }

    }
}


const mapStateToProps = (store) => {
    return {
        products: store.products.productsList,
        categories: store.products.categories,
        filter: store.products.filter,
        isLoggedIn: store.states.isLoggedIn,
    };
};


export default connect(mapStateToProps, { add })(ProductDetails);