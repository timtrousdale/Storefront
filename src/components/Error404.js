import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Error404 extends Component {


    render() {
        return (
            <div>
                <h3 className={'center'}>
                    Sorry, we can't find this page, how about you <Link to="/products">browse our products?</Link> ...
                </h3>
            </div>
        )

    }


}


export default Error404;