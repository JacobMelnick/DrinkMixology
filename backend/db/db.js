const mongoose = require('mongoose')



const userSchema = ({
    username: String,
    password: String,
    drinks: [{type: String}]
})


const User = mongoose.model('User', userSchema)

module.exports = User