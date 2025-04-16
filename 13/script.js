const name = document.getElementById("name")
const email = document.getElementById("email")
const button = document.getElementById("btn")

button.addEventListener('click', function(){
    if (name || email === null) {
        alert("Введите данные")
    }
})