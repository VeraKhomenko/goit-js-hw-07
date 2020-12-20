const inputRef = document.querySelector('#validation-input');
let dataLength = Number(inputRef.dataset.length);
inputRef.addEventListener('blur', inputLengthValidation);

function inputLengthValidation(event) {
  const inputValue = event.target.value;

  if (inputValue.length === dataLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}
