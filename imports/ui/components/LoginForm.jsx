import React, { Component } from 'react';

export default class LoginForm extends Component {
    render() {
        return (
            <div className="ui grid container">
                <div className="row" id="loginForm-Container">
                    <div className="centered eight wide column">
                        <h2> Login </h2>
                        <form className="ui form">
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