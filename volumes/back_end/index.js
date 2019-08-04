const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const path = require('path')
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(favicon(path.join(__dirname, 'src/assets/images', 'favicon.ico')))

const Users = require('./src/routes/Users')

app.use('/users', Users)
app.get('/', (req, res) => res.send('Hello World from back-end!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



