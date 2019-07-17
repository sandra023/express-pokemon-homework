const express = require('express')
const router = express.Router()
const pokemon = require('../models/pokemon')

//renders the pokemon index
router.get('/', (req,res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    })
})

//pushes the req.body to the array and redirects 
//to the pokemon index
router.post('/', (req,res) => {
    pokemon.push(req.body)
    res.redirect('/pokemon')
    console.log(req.body)
})

//renders the new pokemon input page
router.get('/new', (req,res) => {
    res.render('new.ejs')
})

//deletes an array item
router.delete('/:index', (req,res) =>{
    pokemon.splice(req.params.index,1)
    res.redirect('/pokemon')
})

//renders the edit page
router.get('/:index/edit', (req,res) => {
    res.render('edit.ejs', {
        pokemon: pokemon[req.params.index],
        index: req.params.index
    })
})

//renders the array item page
router.get('/:index', (req,res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.index],
    })
})

//puts the req.body edit info into the array and redirects to index.ejs
router.put('/:index', (req,res) => {
    pokemon[req.params.index] = req.body
    res.redirect('/pokemon/' + req.params.index)
})


module.exports = router


