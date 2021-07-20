const mongoose = require('mongoose')
const connection = process.env.DATABASE || 'mongodb://localhost:27017/drinkApp'
mongoose.connect(connection, {
    useCreateIndex: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection



db.on('error', () => {
    console.log('mongoose connection error');
})

db.once('open', () => {
    console.log('mongoose connected successfully');
})

module.exports = db