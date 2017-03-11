import React, { Component } from 'react';

export default class Cardedit extends Component {
    editCard(event) {
        event.preventDefault();
        let newCardName = this.refs.editedCardName.value;
        let newCardDescription = this.refs.editedCardDescription.value;
        this.props.saveChanges(newCardName, newCardDescription);
    }

    render() {
        return (
            <div className="ui card card-container">
                <div className="content">
                    {/*<div className="right floated meta"> 101 </div>*/}
                    <img className="ui avatar image" src={this.props.card.createdByImage} /> {this.props.card.createdBy}
                </div>

                <div className="image">
                    <img src={this.props.card.cardImage} className="image--customized" />
                </div>

                <div className="content">
                    <form className="ui form" onSubmit={this.editCard.bind(this)}>
                        <div className="field">
                            <input type="text" ref="editedCardName" defaultValue={this.props.card.cardName} required/>
                        </div>

                        <div className="field">
                            <input type="text" ref="editedCardDescription" defaultValue={this.props.card.cardDescription} required/>
                        </div>

                        <div className="field">
                            <input type="submit" className="ui green button" value="save"/>
                        </div>
                    </form>
                </div>                    
            </div>
        )
    }
}