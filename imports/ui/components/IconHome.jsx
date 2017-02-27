import React, { Component } from 'react';

export default class IconHome extends Component {
    render() {
        return (
            <div className="column">
                <a href={this.props.icon.link}>
                    <h1 className="ui center aligned icon header">
                        <i className={`${this.props.icon.iconName} icon`}></i>
                        <div className="content">
                            {this.props.icon.content}
                            <div className="sub header"> {this.props.icon.subContent} </div>
                        </div>
                    </h1>
                </a>
            </div>
        )
    }
}