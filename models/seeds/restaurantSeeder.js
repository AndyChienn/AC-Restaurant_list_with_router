const Restaurant = require('../Restaurant')
const db = require('../../config/mongoose')
const restaurantList = require('../../restaurant.json').results

db.once('open', () => {
  Restaurant.create(restaurantList)
    .then(() => {
      console.log('MongoDB restaurantSeeder created!')
    })
    .catch(error => console.log(error))
    .finally(() => db.close())

})