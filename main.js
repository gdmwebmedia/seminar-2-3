import { login } from "./Register-Auth-Login/login.js"

let users = [
     {
          nume: "Ionut",
          email: "ionut.popescu@gmail.com",
          password: "4567"
     },
]

let toDoList = [
     {
          id: 1,
          nume: "do homework",
          status: "to-do"
     }
]

const loginSubmit = document.querySelector("#loginSubmit")
loginSubmit.addEventListener('click', login)