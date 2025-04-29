// // Завдання 1: Підрахунок категорій
// const categories = document.querySelectorAll("#categories .item");
// console.log(`Number of categories: ${categories.length}`);
// categories.forEach((category) => {
//   const title = category.querySelector("h2").textContent;
//   const itemsCount = category.querySelectorAll("ul li").length;
//   console.log(`Category: ${title}, Elements: ${itemsCount}`);
// });

/* Завдання 1: Підрахунок категорій */

const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
