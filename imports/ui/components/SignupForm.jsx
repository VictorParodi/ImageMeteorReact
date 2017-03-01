import React, { Component } from 'react';

export default class SignupForm extends Component {
    render() {
        return (
            <div className="ui grid container">
                <div className="row" id="signupForm-Container">
                    <div className="centered eight wide column">
                        <h2> Signup </h2>
                        <form className="ui form">
                            <div className="field">
                                <label> Username </label>
                                <input type="text" ref="signUsername" required/>
                            </div>

                            <div className="field">
                                <label> Password </label>
                                <input type="password" ref="signPassword" required/>
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