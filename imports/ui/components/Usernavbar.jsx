import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Usernavbar extends Component {
    addCard() {
        $('.ui.addCard.modal').modal('show');
    }

    logout() {
        Meteor.logout(() => {
            FlowRouter.go('home')
        });
    }

    render() {
        return (
            <div className="ui text menu menu--customized">
                <div className="header item"> Welcome <span className="user-target"> {this.props.user} </span> </div>

                <a className="item" onClick={this.addCard}> 
                    Add card
                </a>

                <a className="item" onClick={this.logout}>
                    Logout
                </a>
            </div>
        )
    }
}