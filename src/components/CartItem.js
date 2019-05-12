import React, { Component } from 'react'
import { updateQuantity, deleteCartItem } from "../actions/cartActions";
import { connect } from "react-redux";


class CartItem extends Component {


    changeQuantity(e, index) {
        e.preventDefault();
        this.props.updateQuantity(e.target.value ,index)
    }

    delete(e, item) {
        e.preventDefault();
        this.props.deleteCartItem(item)

    }


    render() {
        return (
            <div className={`cart-item`} >
                <img alt={'item'} className={`item-image`} src={this.props.item.img}/>
                <h4 className={'product-title'}>{this.props.item.title}</h4>
                <p>${this.props.item.price}</p>
                <div>
                    <span className={'qty-label'}>QTY:</span>
                    <input type={'number'} defaultValue={this.props.item.quantity} onChange={(e) => this.changeQuantity(e, this.props.index)}/>
                </div>
                <p className={'red'} onClick={(e) => this.delete(e, this.props.item)}>Remove</p>
            </div>
        );
    }

}

export default connect(null, { updateQuantity, deleteCartItem })(CartItem);