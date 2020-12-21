let boxSize = 30;
const mainDiv = document.querySelector('div#controls');
const inputRef = document.querySelector('[type = "number"');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const inputValue = document.querySelector('div#controls input');
const divBoxes = document.querySelector('div#boxes');

renderBtn.addEventListener('click', onClickRender);
destroyBtn.addEventListener('click', onClickDestroy);

function onClickRender() {
  createBoxes(inputValue.value);
}
function onClickDestroy() {
  divBoxes.innerHTML = '';
  inputRef.value = '';
}

function createBoxes(amount) {
  const step = 10;
  const arr = [];
  for (let index = 0; index < amount; index++) {
    arr.push(
      `<div style="width:${boxSize + index * step}px; height:${
        boxSize + index * step
      }px; background-color: ${randColor()};"></div>`,
    );
  }
  divBoxes.insertAdjacentHTML('beforeend', arr.join(''));
}

function randColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
