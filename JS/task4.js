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
