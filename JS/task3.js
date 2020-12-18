/*
Задание 3
Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>
Используй массив объектов images для создания тегов img вложенных в li.
 Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.*/

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulGallery = document.querySelector('ul#gallery'); // создаем ссылку на родительский эл
ulGallery.classList.add('js__gallery');
// console.dir(ulGallery);

const imageList = images.map(image => {
  // перебираем массив
  const liGallery = document.createElement('li'); // создаем в список 'li' элементов
  liGallery.insertAdjacentHTML(
    // в 'li' элементы добавляем тег img
    'afterbegin',
    `<img class="js__liGallery" src="${image.url}" alt="${image.alt}" width="250" height="165">`,
  );
  return liGallery;
});

ulGallery.append(...imageList); // за одну операцию добавляем новые эл
