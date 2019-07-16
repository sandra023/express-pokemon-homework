const express = require('express');
// const bodyParser= require('body-parser')
// const methodOverride = require('method-override')
const app = express();

const Pokemon = require('./models/pokemon')

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(methodOverride('_method'))


// app.get('/pokemon', (req,res) => {
//     res.send(Pokemon)
// })

app.get('/pokemon', (req,res) => {
    res.send('index.ejs', {
       pokemon: Pokemon
    })
})


app.get('/', (req,res) => {
    res.send('Welcome fromt the express server!')
})

app.listen(3000, () => {
    console.log("Welcome Trainers")
})