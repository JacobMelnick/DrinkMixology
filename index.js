const express = require('express')
const port = 3000
const cors = require('cors')
let app = express()
const router = require('./backend/index.routes.js')

app.use(cors())
app.use(express.static(__dirname + '/frontend/client/dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', router)


app.post('/user', (req, res) => {
    console.log(req.body);
})


app.listen(port, (() => {
    console.log(`listening on port ${port}`);
}))

