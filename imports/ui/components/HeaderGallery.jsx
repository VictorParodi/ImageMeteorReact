import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Usernavbar from './Usernavbar.jsx';
import Guestnavbar from './Guestnavbar.jsx';

export default class HeaderGallery extends TrackerReact(Component) {
    constructor(props) {
        super(props);
    }

    currentUser() {
        let currentuser = Meteor.user()? Meteor.user().username : '';
        return currentuser;
    }

    navBar() {
        let navbar = Meteor.user()? <Usernavbar user={Meteor.user().username}/> : <Guestnavbar />;
        return navbar;
    }

    render() {
        return (
            <div className="ui grid">
                <div className="one column row">
                    <div className="column">
                        {this.navBar()}
                    </div>
                </div>
            </div>
        )
    }
}