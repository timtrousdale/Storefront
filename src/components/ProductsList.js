import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts, fetchCategories, test } from "../actions/productActions";
import Rating from './Rating'


class ProductsList extends Component {

    componentWillMount() {
        //This should realistically be in
        this.props.fetchProducts();
        this.props.fetchCategories();
    }

    render() {
        if ( this.props.isLoggedIn === true ) {
            const postProducts = this.props.products.map(product => (
                <div key={product.id} className={`product`}>
                    <img alt={'product image'} className={`list-image`} src={product.img}/>
                    <Rating rating={product.rating}/>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </div>
            ));

            return (
                <div>
                    <h1 className={`products-header`}>
                        Products
                        <button onClick={this.props.test}>TEST</button>
                    </h1>
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
        isLoggedIn: store.states.isLoggedIn
    };
};



export default connect(mapStateToProps, { fetchProducts, fetchCategories, test })(ProductsList);