const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsElements = ingredients.map(ingredient => {
  const additionalElement = document.createElement('li');
  additionalElement.textContent = ingredient;
  additionalElement.classList.add('item');
  // console.log(additionalElement);
  return additionalElement;
});

document.querySelector('#ingredients').append(...ingredientsElements);
// console.log(ingredientsElements);

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
