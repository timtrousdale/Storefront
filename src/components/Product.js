import React, { Component } from 'react'
import Rating from './Rating'


class Product extends Component {

    redirectToProduct(id) {

        this.props.history.push({
            pathname: '/products/'+id,
            id: id
        })
    }




    render() {
        return (
            <div className={`product`} onClick={() => this.redirectToProduct(this.props.product.id)}>
                <img alt={'product'} className={`list-image`} src={this.props.product.img}/>
                <Rating rating={this.props.product.rating}/>
                <h4 className={'product-title'}>{this.props.product.title}</h4>
                <p>${this.props.product.price}</p>
            </div>
        );
    }

}

export default Product;