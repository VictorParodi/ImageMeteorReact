import React, { Component } from 'react';
import Cards from '../../../api/cards/cards.js';
import Cardfinal from './Cardfinal.jsx';
import Cardedit from './Cardedit.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react'; // Ésta importación es innecesaria
import { Bert } from 'meteor/themeteorchef:bert';

export default class CardItem extends TrackerReact(Component) {
    constructor() {
        super();
        this.state = {
            edit: false
        }
    }

    editCard() {
        this.setState({edit: true});
        // let cardId = this.props.card._id;
    }

    saveEdit(newName, newDescription) {
        let cardId = this.props.card._id;

        Cards.update(
            cardId,
            {
                $set: {
                    cardName: newName,
                    cardDescription: newDescription
                }
            }
        );

        this.setState({edit: false});
    }

    deleteCard() {
        let cardId = this.props.card._id;
        Cards.remove(cardId);
        Bert.alert('The image has been deleted', 'success', 'growl-top-right');
    }

    showView() {
        let activeView = this.state.edit? <Cardedit card={this.props.card} saveChanges={this.saveEdit.bind(this)}/> : <Cardfinal card={this.props.card} edit={this.editCard.bind(this)} remove={this.deleteCard.bind(this)}/>;
        return activeView;
    }

    render() {
        return (
            <div className="column">
                {
                    this.showView()
                }
            </div>
        )
    }
}