const searchInput = document.querySelector('#search');
const divs = document.querySelectorAll('.menu');

searchInput.addEventListener('keyup', (event) => {
    const word = event.target.value.toLowerCase();

    divs.forEach(item => {
        item.querySelector('.italic').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
})



