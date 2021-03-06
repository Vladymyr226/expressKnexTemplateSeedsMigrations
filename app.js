import bodyParser from "body-parser"
import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.APP_PORT}`)
})