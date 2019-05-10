import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filter } from "../actions/productActions";


class Categories extends Component {


    componentWillMount() {

    }

    render() {
        if ( this.props.isLoggedIn === true ) {
            const postCategories = this.props.categories.map(category => (
                <div key={category} className={`category`}>
                    <button onClick={() => this.props.filter(category)} className={'category-link'}>{category}</button>
                </div>
            ));

            return (
                <div className={`categories`}>
                    <div>
                        Filters:
                    </div>
                    {postCategories}
                    <div className={'categories-remove'}>
                        <button onClick={() => this.props.filter('none')} className={'category-link'}>Remove Filters</button>
                    </div>
                </div>
            );
        } else {
            return null
        }
    }
}



const mapStateToProps = (store) => {
    return {
        products: store.products.productsList,
        categories: store.products.categories,
        isLoggedIn: store.states.isLoggedIn
    };
};


export default connect(mapStateToProps, { filter })(Categories);