const form = document.querySelector('#form');
const eventCards = document.querySelector('.cards');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(eventtitle.value);
    console.log(eventdate.value);
    console.log(category.value);
    console.log(description.value);


const card = document.createElement('div');
card.classList.add('card');
card.innerHTML = `
    <h2>${eventtitle.value}</h2>
    <p>${eventdate.value}</p>
    <p>${category.value}</p>
    <p>${description.value}</p>
    <div class="delete-card">X</div>
`;
card.querySelector('.delete-card').addEventListener('click', function() {
    card.remove();
});
eventCards.appendChild(card);
});

document.addEventListener('keydown', function(event) {
    document.querySelector('.key').innerTextevent
});