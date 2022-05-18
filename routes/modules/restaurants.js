const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/Restaurant')

// add Create restaurant
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const body = req.body
  return Restaurant.create(body)
    .then(console.log('new restaurant added,req.body', body))
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// add Read restaurant

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .then(console.log('show restaurant detail!'))
    .catch(err => console.log(err))
})

// add Update restaurant
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})


// router.put('/:id', (req, res) => {
//   const id = req.params.id
//   const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
//   // console.log('body', body)
//   return Restaurant.findById(id)
//     .then((restaurant) => {
//       restaurant.name = name
//       restaurant.name_en = name_en
//       restaurant.category = category
//       restaurant.image = image
//       restaurant.location = location
//       restaurant.phone = phone
//       restaurant.google_map = google_map
//       restaurant.rating = rating
//       restaurant.description = description
//       // console.log('restaurantbody', restaurant.body)
//       return restaurant.save()
//     })
//     .then(() => res.redirect(`/restaurants/${id}`))
//     .catch(error => console.log(error))
// })

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  // console.log('body', body)
  return Restaurant.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.redirect(`/restaurants/${id}`)
    })
    .catch(error => console.error(error))
})

// add Delete restaurant
// router.delete('/:id', (req, res) => {
//   const id = req.params.id
//   return Restaurant.findById(id)
//     .then(restaurant => restaurant.remove())
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findByIdAndDelete(id)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
