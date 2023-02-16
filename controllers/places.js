const app = require('express').Router()

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Tokyo',
        state: 'JP',
        cuisines: 'Japanese',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Rhinebeck',
        state: 'NY',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }]

    res.render('places/index', { places })
})

module.exports = app