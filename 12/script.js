const input = document.getElementById('colorInput');
const button = document.getElementById('changeColorBtn');

button.addEventListener('click', () => {
    const color = input.value.trim(); 
    document.body.style.backgroundColor = color; 
});
