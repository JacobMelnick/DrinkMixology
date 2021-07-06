const model = require('../model')

module.exports = {
    get: ((req, res) => {
        model.getIngredients.byIngredient({
            data: req.body
        })
        .then((response) => {
            res.status(201)
            res.send(response)
        })
        .catch((err) => {
            console.log(err);
            res.status(405)
        })
    })
}