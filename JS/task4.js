/*
Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/
//  <div id="counter">
//    <button type="button" data-action="decrement">  уменьшает
//      -1
//    </button>
//    <span id="value">0</span> - counterValue
//    <button type="button" data-action="increment"> увеличивает
//      +1
//    </button>
//  </div>;

// innerHTML  or textContent

let counter = 0;

const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', onClickDecrement);
incrementBtn.addEventListener('click', onClickIncrement);

function onClickDecrement() {
  counter -= 1;
  counterValue.textContent = counter;
}

function onClickIncrement() {
  counter += 1;
  counterValue.textContent = counter;
}
