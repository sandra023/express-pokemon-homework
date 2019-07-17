const express = require('express');
// const bodyParser= require('body-parser')
// const methodOverride = require('method-override')
const app = express();
const pokemon = require('./models/pokemon')

app.use(express.static('public'));

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(methodOverride('_method'))


// app.get('/pokemon', (req,res) => {
//     res.send(Pokemon)
// })

app.get('/pokemon', (req,res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    })
})










app.get('/', (req,res) => {
    res.send('Welcome fromt the express server!')
})

app.listen(3000, () => {
    console.log("Welcome Trainers")
})