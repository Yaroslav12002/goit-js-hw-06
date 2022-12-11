const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');

const markup = images
  .map(
    ({ url, alt }) => `<li class='list'><img class='task-03__image' src=${url} alt='${alt}'></li>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', markup);

// const additionalListElements = images.map(({ url, alt }) => {
//   const additionalListElement = document.createElement('li');
//   additionalListElement.classList.add('list');

//   const additionalImageElement = document.createElement('img');
//   additionalImageElement.src = url;
//   additionalImageElement.alt = alt;
//   additionalImageElement.classList.add('task-03__image');

//   additionalListElement.append(additionalImageElement);
//   return additionalListElement;
// });

// document.querySelector('.gallery').append(...additionalListElements);

// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
