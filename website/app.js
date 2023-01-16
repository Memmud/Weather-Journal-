/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip="
const apiKey = "&appid=6c2a7dd7aa805931004fa5ff0fcdb651&units=imperial"
const holder = document.getElementById("zip")
const feelings = document.getElementById("feelings")
const date = document.getElementById("date")
const temp = document.getElementById("temp")
const content = document.getElementById("content")

// Create a new date instance dynamically with JS
let d = new Date()
console.log(d)
// D/M/Y format
let newDate = d.getDate() + " / " + (d.getMonth() + 1) + " / " + d.getFullYear()
console.log(newDate)

document.getElementById("generate").addEventListener("click", performAction)

function performAction(e) {
  // action
  getDate(baseURL, holder.value, apiKey)
    .then(function (x) {
      postData("/addLog", {
        temp: x.main.temp,
        date: newDate,
        userResponse: feelings.value,
      })
    })
    .then(updateUI())
}

//setup
//api call
const getDate = async (url, zip, key) => {
  try {
    const result = await fetch(url + zip + key)
    const response = await result.json()
    console.log(response)
    return response
  } catch (err) {
    console.log("Error", err)
  }
}

//posting data
const postData = async (url = "", data = {}) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
    const newData = await res.json()
    console.log(newData)
    return newData
  } catch (error) {
    console.log("error", error)
  }
}

//updating UI
const updateUI = async () => {
  try {
    const result = await fetch("/all")
    const allData = await result.json()
    temp.innerHTML = allData.temp
    date.innerHTML = allData.date
    content.innerHTML = allData.userResponse
  } catch (err) {
    console.log("Error", err)
  }
}
