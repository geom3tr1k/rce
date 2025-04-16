const text = document.getElementById("text")
const button = document.getElementById("btn")

button.addEventListener('click', function(){
    text.textContent = "Поменял текст";
})
