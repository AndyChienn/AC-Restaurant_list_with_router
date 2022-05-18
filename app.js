const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000
// const { redirect } = require('express/lib/response')突然自己冒出
// const urlencoded = require('body-parser/lib/types/urlencoded')突然自己冒出

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
// 設定路由
app.use(routes)

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
// 設定 port 3000
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})