import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts, fetchCategories } from "../actions/productActions";
import Categories from './Categories'
import Product from './Product'
import { Link } from 'react-router-dom'


class ProductsList extends Component {


    componentDidMount() {
        //This should realistically be in an action function,
        this.props.fetchProducts();
        this.props.fetchCategories();
    }

    render() {
        let postProducts;
        if ( this.props.isLoggedIn === true ) {

                let filteredProducts = [];
                this.props.products.map(product => {
                    if ( product.category.includes(this.props.filter ) ) {
                        filteredProducts.push(product);
                    }
                    return '';

                });
                postProducts = filteredProducts.map(product => (
                    <Product key={product.id} product={product} history={this.props.history} />
                ));

            return (
                <div className="content">
                    <h1 className={`products-header`}>

                        Products
                    </h1>
                    <Categories/>
                    <div className={`product-list`}>
                        {postProducts}
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


export default connect(mapStateToProps, { fetchProducts, fetchCategories })(ProductsList);