import React, { Component } from 'react';

export default class Guestnavbar extends Component {
    render() {
        return (
            <div className="ui text menu menu--customized">
                <div className="header item"> Welcome </div>
                
                <a href="/" className="item"> 
                    Home
                </a>

                <a href="/signup" className="item">
                    Signup
                </a>

                <a href="/login" className="item">
                    Login
                </a>
            </div>
        )
    }
}