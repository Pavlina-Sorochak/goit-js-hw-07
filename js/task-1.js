const categoriesCount = document.querySelector('ul#categories li.item');
console.log(`Number of categories: ${categoriesCount.length}`);

categoriesCount.forEach((category) => {
const title = category.querySelector('h2').innerText;
const sum = category.querySelectorAll('li').length;
console.log(`Categore: ${title}`);
console.log(`Elements: ${sum}`);
});