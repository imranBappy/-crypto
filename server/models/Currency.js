
const { Schema, model } = require('mongoose');


const currencySchema = new Schema({
    base_unit: String,
    quote_unit: String,
    low: Number,
    high: Number,
    last: Number,
    type: String,
    open: Number,
    volume: Number,
    sell: Number,
    buy: Number,
    at: Number,
    name: String
}, { timestamps: true })


const Currency = model('Currency', currencySchema)
module.exports = Currency