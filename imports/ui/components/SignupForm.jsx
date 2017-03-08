import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base'; // optional
import { FlowRouter } from 'meteor/kadira:flow-router'; // optional
import { Bert } from 'meteor/themeteorchef:bert'; // optional

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (Meteor.user()) {
            FlowRouter.go('gallery');
        }
    }

    addUser(event) {
        event.preventDefault();
        let userName = this.refs.signUsername.value;
        let pass = this.refs.signPassword.value;
        let userImage = this.refs.userImage.value;
        
        let newUser = {
            username: userName,
            password: pass,
            profile: {
                userImage: userImage
            }
        }

        Accounts.createUser(newUser, (error) => {
            // error? console.log(error.reason) : FlowRouter.go('gallery');
            error? Bert.alert(error.reason, 'danger', 'growl-top-right') : FlowRouter.go('gallery');
        });

        this.refs.signUsername.value = '';
        this.refs.signPassword.value = '';
        this.refs.userImage.value = '';
    }

    render() {
        return (
            <div className="ui grid container">
                <div className="row" id="signupForm-Container">
                    <div className="centered eight wide column">
                        <h2> Signup </h2>
                        <form className="ui form" onSubmit={this.addUser.bind(this)}>
                            <div className="field">
                                <div className="two fields">
                                    <div className="field">
                                        <label> Username </label>
                                        <input type="text" ref="signUsername" placeholder="type your username" required/>
                                    </div>

                                    <div className="field">
                                        <label> Password </label>
                                        <input type="password" ref="signPassword" placeholder="type your password" required/>
                                    </div>
                                </div>
                            </div>

                            <div className="field">
                                <label> Image </label>
                                <input type="text" ref="userImage" placeholder="link to your image" required/>
                            </div>

                            <div className="field">
                                <input type="submit" className="ui blue button" value="Send"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}