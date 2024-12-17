const express = require('express')
const app = express()
const path = require('path')
const port = 3000

// autoriser les files statiques comme les files css 
// app.use(express.static('public'))
 app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})