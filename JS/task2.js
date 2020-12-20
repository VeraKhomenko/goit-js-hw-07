const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});

ul.append(...ingredientsList);
