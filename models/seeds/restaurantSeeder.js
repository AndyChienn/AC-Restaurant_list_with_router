const mongoose = require('mongoose')
const Restaurant = require('../Restaurant')
const restaurantList = require('../../restaurant.json').results

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('MongoDB error!')
})
db.once('open', () => {
  Restaurant.create(restaurantList)
    .then(() => {
      console.log('MongoDB connected')
    })
    .catch(error => console.log(error))
})