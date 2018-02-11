import React from 'react'
import ReactDOM from 'react-dom'
import differenceInDays from 'date-fns/difference_in_days'

import registerServiceWorker from './registerServiceWorker'

import './styles.css'

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const BASE_NUMBER = 5
const BASE_DATE = new Date(2018, 0, 1)

const parsePath = () =>
  window.location.pathname
    .substr(1)
    .split('/')
    .filter(i => i !== '')

const pathParts = parsePath()
const baseNumber = (pathParts.length && pathParts[0]) || BASE_NUMBER

let baseDate = BASE_DATE

const tmpDate = pathParts.length && pathParts[1]
// validate date input
if (tmpDate && !Number.isNaN(Date.parse(tmpDate))) {
  baseDate = tmpDate
}

const diff = differenceInDays(new Date(), new Date(baseDate))

const num = Math.abs(diff) % baseNumber + 1
const rand = random(1, 11)

const App = () => (
  <div className="container">
    <div className={`number theme-${rand}`}>{num}</div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
