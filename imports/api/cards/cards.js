// Definition of the cards collection

import { Mongo } from 'meteor/mongo';

const Cards = new Mongo.Collection('cards');

export default Cards;