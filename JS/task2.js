/*
Задание 2
В HTML есть пустой список ul#ingredients.
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный 
li, после чего вставит все li за одну операцию в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement().
elem.querySelector(selector)
*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// способ 1
// const container = document.createDocumentFragment(); //создаем пустой контейнер
// const ulElement = document.getElementById('ingredients'); // из DOM  вытягиваем елемент по его Id

// ingredients.forEach(element => {
//   // проходим по каждому эл массива ingredients
//   const liElement = document.createElement('li'); // создаем пустой эл li
//   liElement.textContent = element; // наполняем его текстом из массива
//   container.appendChild(liElement); // кладем наполненную ли в контейнер
// });

// ulElement.appendChild(container); // вкладываем элементу с Id всё содержимое из контейнера
// console.log(ulElement);

// способ 2

const ul = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;

  return li;
});

console.log(ingredientsList);

ul.append(...ingredientsList);
