import React, { Component } from 'react';

export default class CardItem extends Component {
    render() {
        return (
            <div className="column">
                <div className="ui card card-container">
                    <div className="content">
                        {/*<div className="right floated meta"> 101 </div>*/}
                        <img className="ui avatar image" src={`${this.props.card.createdByImage}`} /> {this.props.card.createdBy}
                    </div>

                    <div className="image">
                        <img src={`${this.props.card.cardImage}`} className="image--customized" />
                    </div>

                    <div className="content">
                        <a className="header"> {this.props.card.cardName} </a>
                        <div className="description"> {this.props.card.cardDescription} </div>
                    </div>

                    <div className="extra content">
                        <a><i className="large heart icon"></i> {this.props.card.likesCounter} </a>
                    </div>
                </div>
            </div>
        )
    }
}