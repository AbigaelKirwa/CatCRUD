const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const catRoute = require('./routes/cat.routes.js')

app.use('/cats', catRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})