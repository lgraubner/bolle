import React from 'react'
import ReactDOM from 'react-dom'
import differenceInDays from 'date-fns/difference_in_days'
import parse from 'date-fns/parse'
import queryString from 'query-string'

import registerServiceWorker from './registerServiceWorker'

import './styles.css'

const DEFAULT_START = new Date(2018, 0, 1)

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const dateIsValid = date => !isNaN(date.getTime())

const query = queryString.parse(window.location.search)

const options = Object.assign(
  {},
  {
    number: 5,
    start: DEFAULT_START
  },
  query
)

const date = parse(options.start)

const diff = differenceInDays(
  new Date(),
  dateIsValid(date) ? date : DEFAULT_START
)

const num = Math.abs(diff) % options.number + 1
const rand = random(1, 11)

const App = () => (
  <div className="container">
    <div className={`number theme-${rand}`}>{num}</div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
