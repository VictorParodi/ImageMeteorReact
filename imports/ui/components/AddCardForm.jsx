import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import Cards from '../../api/cards/cards.js';

export default class AddCardForm extends Component {
    addCard(event) {
        event.preventDefault();

        let userlog = Meteor.user();
        let cardName = this.refs.cardName.value.trim();
        let cardImage = this.refs.cardImage.value.trim();
        let cardDescription = this.refs.cardDescription.value.trim();

        let newCard = {
            createdBy: userlog.username,
            createdById: userlog._id,
            createdByImage: userlog.profile.userImage,
            cardName: cardName,
            cardImage: cardImage, 
            cardDescription: cardDescription,
            createdAt: new Date(),
            likesCounter: 0
        }

        Cards.insert(newCard);

        $('.ui.addCard.modal').modal('hide');

        this.refs.cardName.value = '';
        this.refs.cardImage.value = '';
        this.refs.cardDescription.value = '';
    }

    render() {
        return (
            <div className="ui addCard basic modal">
                <div className="content">
                    <h2> New Card </h2>
                    <div className="one column row" id="AddCardForm-container">
                        <form className="ui form" onSubmit={this.addCard.bind(this)}>
                            <div className="field">
                                <div className="two fields">
                                    <div className="field">
                                        <label className="white-font"> Card Name </label>
                                        <input type="text" ref="cardName" id="cardName" required/> 
                                    </div>

                                    <div className="field">
                                        <label className="white-font"> Card Image </label>
                                        <input type="text" ref="cardImage" id="cardImage" required/> 
                                    </div>
                                </div>
                            </div>

                            <div className="field">
                                <label className="white-font"> Card Description </label>
                                <input type="text" ref="cardDescription" id="cardDescription" required/> 
                            </div>

                            <div className="field">
                                <input type="submit" value="Add card" className="ui inverted button"/> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}