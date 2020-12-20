/*Задание 8 - дополнительное, выполнять не обязательно
Напиши скрипт создания 
и очистки коллекции элементов.
 Пользователь вводит количество элементов в input и нажимает кнопку Создать,
  после чего рендерится коллекция.
   При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
 Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
          <input type="number" min="0" max="100" step="1" />
          <button type="button" data-action="render">Создать</button>
          <button type="button" data-action="destroy">Очистить</button>
        </div>
        <div id="boxes"></div>
*/

let boxSize = 30;
const mainDiv = document.querySelector('div#controls');

const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

renderBtn.addEventListener('click', onClickRender);
destroyBtn.addEventListener('click', onClickDestroy);

function onClickRender() {
  const inputValue = document.querySelector('div#controls input').value;
  createBoxes(inputValue);
}
function onClickDestroy() {
  const divDestroy = document.querySelectorAll('div#boxes');
  for (let keyNode of divDestroy) keyNode.remove();
}

function createBoxes(amount) {
  const divBoxes = document.querySelector('div#boxes');
  const step = 10;
  for (let index = 0; index < amount; index++) {
    divBoxes.insertAdjacentHTML(
      'beforeEnd',
      `<div style="width:${boxSize + index * step}px; height:${
        boxSize + index * step
      }px; background-color: ${randColor()};"></div>`,
    );
  }
}

function randColor() {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}
