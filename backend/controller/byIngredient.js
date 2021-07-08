const model = require('../model/getIngredients.js')

module.exports = {
    get: function (req, res) {
        model.byIngredient({
            data: req.body
        })
        .then((response) => {
            res.status(201)
            res.send(response.data.drinks)
        })
        .catch((err) => {
            console.log(err);
            res.status(405)
        })
    },
    getVodka: function (req, res) {
        model.byVodka({
            data: req.body
        })
        .then((response) => {
            res.status(201)
            res.send(response.data.drinks)
        })
        .catch((err) => {
            console.log(err);
            res.status(405)
        })
    },

    random: function (req, res) {
        model.randomDrink({
            data: req.body
        })
        .then((response) => {
            res.status(201)
            res.send(response.data)
        })
        .catch((err) => {
            console.log(err)
            res.status(401)
        })
    },
}