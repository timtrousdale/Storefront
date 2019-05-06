import React, { Component } from 'react'


export default class Rating extends Component {

    render() {

        const fullStars = (Math.floor(this.props.rating) + ((this.props.rating % 1) > .7 ? 1 : 0));

        return (
            <div className="rating">
                <span className={fullStars >= 1 ? 'full-star' : 'empty-star'}>
                    {String.fromCharCode(9733)}
                </span>
                <span className={fullStars >= 2 ? 'full-star' : 'empty-star'}>
                    {String.fromCharCode(9733)}
                </span>
                <span className={fullStars >= 3 ? 'full-star' : 'empty-star'}>
                    {String.fromCharCode(9733)}
                </span>
                <span className={fullStars >= 4 ? 'full-star' : 'empty-star'}>
                    {String.fromCharCode(9733)}
                </span>
                <span className={fullStars >= 5 ? 'full-star' : 'empty-star'}>
                    {String.fromCharCode(9733)}
                </span>
            </div>
        );
    }
}
