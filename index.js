const express = require('express')
const port = process.env.PORT || 3000
const cors = require('cors')
let app = express()
const router = require('./backend/index.routes.js')
const db = require('./backend/index.db.js')
const user = require('./backend/controller/users.js')

app.use(cors())
app.use(express.static(__dirname + '/frontend/client/dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', router)


app.post('/users', (req, res) => {
    user.addUser(req.body)
    .then((data) => {
        res.status(201)
        res.send(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(401)
    })
})

app.get('/users', (req, res) => {
    console.log(req.body)
    user.getUser(req.body)
    .then((data) => {
        res.status(200)
        res.send(data)
    })
    .catch((err) => {
        console.log(err);
        res.status(401)
    })
})

app.listen(port, (() => {
    console.log(`listening on port ${port}`);
}))

