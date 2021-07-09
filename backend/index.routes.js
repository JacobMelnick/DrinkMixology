const controller = require('./controller/byIngredient.js')
const router = require('express').Router()

router.get('/getData', controller.get)

router.get('/random', controller.random)

router.get('/getVodka', controller.getVodka)

router.get('/getRum', controller.getRum)

router.get('/getTequila', controller.getTequila)

router.get('/drinkInfo/:i', controller.byId)

module.exports = router

