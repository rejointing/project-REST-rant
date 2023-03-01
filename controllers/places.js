const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Tokyo',
        state: 'JP',
        cuisines: 'Japanese',
        pic: '/images/ambiance.jpg'
        // Photo by <a href="https://unsplash.com/ko/@ulysse_pcl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ulysse Pointcheval</a> on <a href="https://unsplash.com/photos/1WmlAiYgnoI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
    }, {
        name: 'Coding Cat Cafe',
        city: 'Rhinebeck',
        state: 'NY',
        cuisines: 'Coffee, Bakery',
        pic: '/images/bakery.jpg'
        // Photo by <a href="https://unsplash.com/@thattravelblog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dave Weatherall</a> on <a href="https://unsplash.com/photos/vIDwXIkbkOk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    }]

    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    res.render('/places/:id')
})

router.post('/places', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

module.exports = router