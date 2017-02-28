// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import Cards from '../../api/cards/cards.js';

Meteor.startup(() => {
  if (Cards.find().count() === 0) {
    const cardItem = [
      {
        createdBy: "John",
        createdById: "asd000",
        createdByImage: "user1.jpg",
        cardName: "Image Card 1",
        cardImage: "image1.jpg",
        cardDescription: "card 1 description",
        createdAt: new Date(),
        likesCounter: 0
      },

      {
        createdBy: "Kate",
        createdById: "asd111",
        createdByImage: "user2.jpg",
        cardName: "Image Card 2",
        cardImage: "image2.jpg",
        cardDescription: "card 2 description",
        createdAt: new Date(),
        likesCounter: 0
      },

      {
        createdBy: "Allison",
        createdById: "asd222",
        createdByImage: "user3.jpg",
        cardName: "Image Card 3",
        cardImage: "image3.jpg",
        cardDescription: "card 3 description",
        createdAt: new Date(),
        likesCounter: 0
      },

      {
        createdBy: "Diana",
        createdById: "asd333",
        createdByImage: "user4.jpg",
        cardName: "Image Card 4",
        cardImage: "image4.jpg",
        cardDescription: "card 4 description",
        createdAt: new Date(),
        likesCounter: 0
      }
    ];

    cardItem.forEach((card) => {
      Cards.insert(card);
    })
  }
});
