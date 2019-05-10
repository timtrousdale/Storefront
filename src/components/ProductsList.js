import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts, fetchCategories, test } from "../actions/productActions";
import Categories from './Categories'
import Rating from './Rating'


class ProductsList extends Component {

    componentDidMount() {
        //This should realistically be in an action
        this.props.fetchProducts();
        this.props.fetchCategories();
    }

    render() {
        let postProducts;
        if ( this.props.isLoggedIn === true ) {
            if ( this.props.filter === 'none' ) {
                postProducts = this.props.products.map(product => (
                    <div key={product.id} className={`product`}>
                        <img alt={'product'} className={`list-image`} src={product.img}/>
                        <Rating rating={product.rating}/>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                ));
            } else {
                let filteredProducts = [];
                this.props.products.map(product => {
                    if ( product.category === this.props.filter ) {
                        filteredProducts.push(product);
                    }

                });
                postProducts = filteredProducts.map(product => (
                    <div key={product.id} className={`product`}>
                        <img alt={'product'} className={`list-image`} src={product.img}/>
                        <Rating rating={product.rating}/>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                ));
            }

            return (
                <div className="content">
                    <h1 className={`products-header`}>
                        Products
                        <button onClick={this.props.test}>TEST</button>
                    </h1>
                    <Categories/>
                    <div className={`product-list`}>
                        {postProducts}
                    </div>
                </div>
            );
        } else {
            return null
        }
    }
}

ProductsList.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
};

const mapStateToProps = (store) => {
    return {
        products: store.products.productsList,
        categories: store.products.categories,
        filter: store.products.filter,
        isLoggedIn: store.states.isLoggedIn
    };
};


export default connect(mapStateToProps, { fetchProducts, fetchCategories, test })(ProductsList);