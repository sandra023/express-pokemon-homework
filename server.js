const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const pokemon = require('./models/pokemon')
const pokemonController = require('./controllers/pokemon')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use('/pokemon', pokemonController)


app.get('/', (req,res) => {
    res.send('Welcome fromt the express server!')
})

app.listen(3000, () => {
    console.log("Welcome Trainers")
})

module.exports = app;
