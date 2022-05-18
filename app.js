const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
// const { redirect } = require('express/lib/response')
const mongoose = require('mongoose')
const db = mongoose.connection
const methodOverride = require('method-override')
const routes = require('./routes')
const Restaurant = require('./models/Restaurant')
const bodyParser = require('body-parser')
const urlencoded = require('body-parser/lib/types/urlencoded')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// 設定路由
app.use(routes)

db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})


// add Search function
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase()
  console.log('keyword', keyword)
  Restaurant.find({})
    .lean()
    .then((restaurants) => {
      const searchedRestaurant = restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(keyword) || restaurant.category.includes(keyword)
      })
      res.render('index', { restaurants: searchedRestaurant, keyword })
    })
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})