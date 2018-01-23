const express = require('express')
const exphbs = require('express-handlebars')
const minifyHTML = require('express-minify-html')
const helmet = require('helmet')
const differenceInDays = require('date-fns/difference_in_days')

const app = express()

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const BASE_NUMBER = 5
const BASE_DATE = new Date(2018, 0, 1)

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs'
  })
)
app.set('view engine', 'hbs')

app.use(helmet())

app.use(
  minifyHTML({
    override: true,
    htmlMinifier: { removeComments: true, minifyJS: true }
  })
)

app.get('/:num?/:date?', (req, res) => {
  const baseNumber = req.params.num || BASE_NUMBER

  let baseDate = BASE_DATE

  // validate date input
  if (!Number.isNaN(Date.parse(req.params.date))) {
    baseDate = req.params.date
  }

  const diff = differenceInDays(new Date(), new Date(baseDate))
  const num = Math.abs(diff) % baseNumber + 1

  const rand = random(1, 11)

  res.render('index', { theme: rand, num })
})

app.listen(3000)
