import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Loader extends Component {

    render() {
        return (
            <div>
                <div className={`loading ${this.props.isLoading === true ? 'show' : 'hide'}`}>
                    Loading&#8230;
                </div>
            </div>
        )


    }

}

const mapStateToProps = (state) => (state.loader);

export default connect(mapStateToProps, {})(Loader);