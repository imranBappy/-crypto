const Currency = require("../models/Currency")
const jsonDT = require("../../newData.json")
// const db = JSON.parse(jsonDT)

exports.currencyPostController = async (req, res, next) => {
    try {
        const newCurrency = await Currency.insertMany(jsonDT)
        console.log(newCurrency);
        res.json({ message: "Successfully Added!" });
    } catch (e) {
        next(e)
    }
}

// blog get controller

exports.currencyGetController = async (req, res, next) => {
    let itemPerPage = 10
    try {
        let currency = await Currency.find({})
            .limit(itemPerPage)
        res.json(currency)
    } catch (error) {
        next(error)
    }
}


