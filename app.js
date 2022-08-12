const express = require('express')
const path = require('path')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const port = process.env.PORT || 3000

//middleware
app.use(express.json())
app.use(express.static('./public'))

//routes

app.use('/api/v1/tasks', tasks)

app.use(notFound)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening on ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
