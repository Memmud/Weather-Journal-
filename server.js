// Setup empty JS object to act as endpoint for all routes
let = projectData = {}

// Require Express to run server and routes
const express = require("express")
// Start up an instance of app
const app = express()
app.get("/all", function (x, y) {
  y.send(projectData)
  console.log(projectData)
})

app.get("/all", async function (req, res) {
  await res.send(projectData)
})

app.post("/addLog", async function (req, res) {
  const newEntry = {
    temp: await req.body.temp,
    date: await req.body.date,
    userResponse: await req.body.userResponse,
  }
  projectData = newEntry
  await y.send(projectData)
  console.log(projectData)
})

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())

// Initialize the main project folder
app.use(express.static("website"))

const port = 65000
// Setup Server
const server = app.listen(port, listener)

function listener() {
  console.log(`server running`)
  console.log(`running on localhost: ${port}`)
}
