const express = require('express')
const app = express()
const PORT = 3000

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
})