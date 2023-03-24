// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue

let counterValue = 0;
const valueEl = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
btnDecrement.addEventListener('click', ()=>{valueEl.textContent = counterValue -=1});
const btnIncrement = document.querySelector('[data-action="increment"]');
btnIncrement.addEventListener('click', ()=>{valueEl.textContent = counterValue +=1});


