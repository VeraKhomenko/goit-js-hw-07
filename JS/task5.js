/*Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" 
placeholder="Ваше имя?" 
id="name-input" />
        <h1>Привет, 
        <span id="name-output">незнакомец</span>!</h1>
*/
const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handleInputChange);
// способ 1
// function handleInputChange(event) {
//   const eValue = event.target.value;
//   if (eValue === '') {
//     nameLabelRef.textContent = 'незнакомец';
//   } else {
//     nameLabelRef.textContent = eValue;
//   }
// }

function handleInputChange(event) {
  let spanValue = 'незнакомец';
  const inputValue = event.target.value;
  if (inputValue != '') {
    spanValue = inputValue;
  }
  nameLabelRef.textContent = spanValue;
}
