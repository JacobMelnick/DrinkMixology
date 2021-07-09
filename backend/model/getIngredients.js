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

    byRum: (() => {
        let options = {
            method: 'GET',
            url: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'
        }
        return axios(options)
    }),

    byTequila: (() => {
        let options = {
            method: 'GET',
            url: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila'
        }
        return axios(options)
    }),

    randomDrink: (() => {
        let options = {
            method: 'GET',
            url: 'http://www.thecocktaildb.com/api/json/v1/1/random.php'
        }
        return axios(options)
    }), 

    getDrinkId: ((id) => {
        let options = {
            method: 'GET',
            url: 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php',
            params: {
                i: id
            }
        }
        return axios(options)
    })

}