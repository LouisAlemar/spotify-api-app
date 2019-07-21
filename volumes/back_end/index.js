const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const port = 8080

app.use(favicon(path.join(__dirname, 'src/assets/images/', 'favicon.ico')))

app.get('/', (req, res) => res.send('Hello World from back-end!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
