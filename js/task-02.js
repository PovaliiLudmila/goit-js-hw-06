// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector("#ingredients");
// const firstItem = document.createElement("li");
// firstItem.textContent = 'Potatoes';
// firstItem.classList.add('item');
// const secondItem = document.createElement("li");
// secondItem.textContent = 'Mushrooms';
// secondItem.classList.add('item');
// const thirdItem = document.createElement("li");
// thirdItem.textContent = 'Garlic';
// thirdItem.classList.add('item');
// const fourthItem = document.createElement("li");
// fourthItem.textContent = 'Tomatos';
// fourthItem.classList.add('item');
// const fifthItem = document.createElement("li");
// fifthItem.textContent = 'Herbs';
// fifthItem.classList.add('item');
// const sixItem = document.createElement("li");
// sixItem.textContent = 'Condiments';
// sixItem.classList.add('item');


// list.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixItem);
const containerElement = document.querySelector('#ingredients');
const makeContainerElement = option => {
  return ingredients.map(option => {
const ingredientsEl = document.createElement('li');
ingredientsEl.classList.add('item');
ingredientsEl.textContent = option;

return ingredientsEl;
});
};
const elements = makeContainerElement(ingredients);
containerElement.append(...elements);