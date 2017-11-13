const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('index.html')
})

app.post('/', (req, res) => {
  console.log('req.body.name = ', req.body.name)
  console.log('req.body.message = ', req.body.message)
})

app.listen(9999, () => {
  console.log('Server running on ', 9999)
})
