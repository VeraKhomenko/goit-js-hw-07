const categories = document.querySelectorAll('li.list__item');
console.log(`В списке ${categories.length} категории.`);

categories.forEach(element => {
  console.log(`Категория: ${element.querySelector('h2').textContent};`);
  console.log(
    `Колличество эллементов: ${element.querySelectorAll('.list li').length}`,
  );
});
