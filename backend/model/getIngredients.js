const axios = require('axios')

module.exports = {
    byIngredient: (() => {
        let options = {
            method: 'GET',
            url: 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'
        }
        return axios(options)
    })
}