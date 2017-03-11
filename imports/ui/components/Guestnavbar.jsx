import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Guestnavbar extends Component {
    goingTo(route) {
        FlowRouter.go(route);
    }

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