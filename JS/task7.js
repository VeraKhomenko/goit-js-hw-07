const inputRef = document.querySelector('input#font-size-control');
const inputSpan = document.querySelector('span#text');

inputRef.addEventListener('input', changeTextSize);

function changeTextSize() {
  let fontSizeSpan = inputRef.value + 'px';
  inputSpan.style.fontSize = fontSizeSpan;
}
