import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeUsername, changePassword, logIN } from "../actions/loginActions";
import { Link } from 'react-router-dom'


class Login extends Component {

    onChange = (e) => {
        e.preventDefault();
        e.target.name === 'username' ? this.props.changeUsername(e.target.value) : this.props.changePassword(e.target.value);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            username: this.props.login.username,
            password: this.props.login.password
        };
        console.log(this.props.history);

        this.props.logIN(post, this.props.history);


    };

    render() {

        if ( this.props.isLoggedIn === false ) {
            return (
                <div className={`login-container`}>
                    <h4>Login</h4>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <p className={`red ${this.props.error === true ? 'show' : 'hide'}`}>
                                **Try "admin" and "password" for your credentials**
                            </p>
                        </div>
                        <div>
                            <label>Username</label>
                            <input type="text" name="username" onChange={this.onChange} value={this.props.username}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.onChange} value={this.props.password}/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <h3 className={'center'}>
                        You are already logged in. Why don't you <Link to="/products">browse our products?</Link> ...
                    </h3>
                </div>
            )
        }
    }


}


const mapStateToProps = (store) => ({
    login: store.login,
    isLoggedIn: store.states.isLoggedIn,
    error: store.states.loggedInError
});

export default connect(mapStateToProps, { changeUsername, changePassword, logIN })(Login);