const axios = require('axios')

module.exports = {
    byIngredient: (() => {
        let options = {
            method: 'GET',
            url: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'
        }
        return axios(options)
    }),
    
    byVodka: (() => {
        let options = {
            method: 'GET',
            url: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka'
        }
        return axios(options)
    }),

    randomDrink: (() => {
        let options = {
            method: 'GET',
            url: 'http://www.thecocktaildb.com/api/json/v1/1/random.php'
        }
        return axios(options)
    })
}