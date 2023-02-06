import express, { application } from 'express'

const app = express()
// Middleware
app.use(express.json())

app.listen(4000, () => {
  console.log("App running on port 4000")
})