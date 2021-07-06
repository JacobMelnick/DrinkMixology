const controller = require('./controller')
const router = require('express').Router()

router.get('www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin', controller.byIngredient.get)