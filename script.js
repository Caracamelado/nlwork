const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExistis = nlwSetup.dayExists(today)

  if (dayExistis) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('Habits', JSON.stringify(nlwSetup.data))

  localStorage.getItem('Habits')
  JSON.parse(localStorage.getItem('Habits'))
}

//const data = {
//run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//takePills: ["01-03"],
//journal: ["01-06"]
//}

const data = JSON.parse(localStorage.getItem("Habits")) 
nlwSetup.setData(data)
nlwSetup.load()
