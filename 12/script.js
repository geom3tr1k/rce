const input = document.getElementById('color');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    const color = input.value.trim(); 
    document.body.style.backgroundColor = color; 
});
