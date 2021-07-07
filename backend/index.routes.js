const controller = require('./controller/byIngredient.js')
const router = require('express').Router()

router.get('/getData', controller.get)

router.get('/random', controller.random)

router.get('/getVodka', controller.getVodka)

module.exports = router