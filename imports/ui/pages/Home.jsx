import React, { Component } from 'react';
import IconHome from '../components/IconHome.jsx';

export default class Home extends Component {
    iconsList() {
        return icons = [
            {iconName: 'find', content: 'Explore', subContent: 'Look the gallery', link: '/gallery'},
            {iconName: 'users', content: 'Sign Up', subContent: 'Become a member', link: '/test'},
            {iconName: 'user', content: 'Login', subContent: 'Upload and share', link: '/testing'}
        ]
    }

    render() {
        return (
            <div className="ui grid container">
                <div className="centered one column row">
                    <h1 className="title--home"> Welcome to ImageWeb, Meteor + React edition </h1>
                </div>

                <div className="three column row">
                    {
                        this.iconsList().map((item, index) => {
                            return <IconHome key={index} icon={item} />
                        })
                    }
                </div>
            </div>
        )
    }
}