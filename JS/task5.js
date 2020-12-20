const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  let spanValue = 'незнакомец';
  const inputValue = event.target.value;
  if (inputValue != '') {
    spanValue = inputValue;
  }
  nameLabelRef.textContent = spanValue;
}
