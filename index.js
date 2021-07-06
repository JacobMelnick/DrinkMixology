const express = require('express')
const port = 3000

let app = express()

app.use(express.static(__dirname + '/frontend/client/dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    console.log(req.body);
})


app.post('/user', (req, res) => {
    console.log(req.body);
})


app.listen(port, (() => {
    console.log(`listening on port ${port}`);
}))