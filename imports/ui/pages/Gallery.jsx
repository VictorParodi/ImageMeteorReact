import React, { Component } from 'react';
import CardItem from '../components/cardItem/CardItem.jsx';
import AddCardForm from '../components/AddCardForm.jsx';
import Cards from '../../api/cards/cards.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Gallery extends TrackerReact(Component) {
    constructor() {
        super();
    }

    cardsList() {
        // let cards = [
        //     {
        //         userName: 'Kate',
        //         userImage: 'user1.jpg',
        //         cardName: 'Image Card',
        //         cardImage: 'image1.jpg',
        //         cardDescription: 'A brief image description'
        //     },

        //     {
        //         userName: 'Kate',
        //         userImage: 'user1.jpg',
        //         cardName: 'Image Card',
        //         cardImage: 'image2.jpg',
        //         cardDescription: 'A brief image description'
        //     },

        //     {
        //         userName: 'Kate',
        //         userImage: 'user1.jpg',
        //         cardName: 'Image Card',
        //         cardImage: 'image3.jpg',
        //         cardDescription: 'A brief image description'
        //     },

        //     {
        //         userName: 'Kate',
        //         userImage: 'user1.jpg',
        //         cardName: 'Image Card',
        //         cardImage: 'image4.jpg',
        //         cardDescription: 'A brief image description'
        //     }
        // ]

        // return cards;
    }

    cards() {
        return Cards.find({}, {sort: {createdAt: -1} }).fetch();
    }

    render() {
        let cards = this.cards();

        if (!cards) {
            return <div> Loading... </div>
        }

        return (
            <div className="ui grid container">
                <div className="three column row stackable">
                    {
                        cards.map((item) => {
                            return <CardItem key={item._id} card={item}/>
                        })
                    }
                </div>

                <AddCardForm />
            </div>
        )
    }
}
