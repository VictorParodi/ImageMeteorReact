import { Meteor } from 'meteor/meteor'; // optional
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router'; // optional
import { Bert } from 'meteor/themeteorchef:bert'; // optional

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (Meteor.user()) {
            FlowRouter.go('gallery');
        }
    }

    loginUser(event) {
        event.preventDefault();
        let username = this.refs.loginUsername.value;
        let pass = this.refs.loginPassword.value;

        Meteor.loginWithPassword(username, pass, (error) => {
            // error? console.log(error.reason) : FlowRouter.go('gallery');
            error? Bert.alert(error.reason, 'danger', 'growl-top-right') : FlowRouter.go('gallery'); 
        });

        this.refs.loginUsername.value = '';
        this.refs.loginPassword.value = '';
    }

    render() {
        return (
            <div className="ui grid container">
                <div className="row" id="loginForm-Container">
                    <div className="centered eight wide column">
                        <h2> Login </h2>
                        <form className="ui form" onSubmit={this.loginUser.bind(this)}>
                            <div className="field">
                                <label> Username </label>
                                <input type="text" ref="loginUsername" required/>
                            </div>

                            <div className="field">
                                <label> Password </label>
                                <input type="password" ref="loginPassword" required/>
                            </div>

                            <div className="field">
                                <input type="submit" value="Enter" className="ui blue button"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}