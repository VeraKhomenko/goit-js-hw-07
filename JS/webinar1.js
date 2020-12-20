// // 1 часть

// const targetBtnRef = document.querySelector('.js-target-btn'); // ссылка на целевую кнопку
// const addListenerBtnRef = document.querySelector('.js-add-listener'); // на кнопку добавить слушателя
// const removeListenerBtnRef = document.querySelector('.js-remove-listener'); // снять слушатля

// const doStuffOnClick = () => {  // ссылочная ижентичность,  солбэки хронят отдельными ф-ями
//   console.log('click!!!');
// };
// //при клике на кнопку "добавить слушателя" - выполняем ф-цию добавления слушателя
// addListenerBtnRef.addEventListener('click', () => {
//   targetBtnRef.addEventListener('click', doStuffOnClick); // () => {console.log('click!!!'); - положили в переменную-ссылку, чтобы add и remove выполняли свои действия корректно
// }); // вешаем слушателя на кнопку ("действие - 'click'", "а вторым арг - ф-цию обратного вызова - callbakc=>  () => {}   будет выполнятся каждый раз при нажатии на кнопку")

// removeListenerBtnRef.addEventListener('click', () => {
//   targetBtnRef.removeEventListener('click', doStuffOnClick);
// });  // снимает ф-цию добавление слушателя при клике на "целевую кнопку"

// // 2 часть

// const targetBtnRef = document.querySelector('.js-target-btn'); // ссылка на целевую кнопку
// const addListenerBtnRef = document.querySelector('.js-add-listener'); // на кнопку добавить слушателя
// const removeListenerBtnRef = document.querySelector('.js-remove-listener'); // снять слушатля

// targetBtnRef.addEventListener('click', event => {
//   // события всегда есть в браузере,  addEventListener только создает слушателя
//   console.log(event.target);
// });
