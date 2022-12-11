function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createElement = document.querySelector('button[data-create]');
const destroyElement = document.querySelector('button[data-destroy]');
const boxesElement = document.querySelector('div#boxes');
let lastBoxNumber = 0;

createElement.addEventListener('click', takeNumber);
destroyElement.addEventListener('click', destroyBoxes);

function takeNumber() {
  const inputElement = document.querySelector('input');
  createBox(parseInt(inputElement.value));
}

function createBox(amount) {
  const userBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.setAttribute(
      'style',
      `background-color: ${getRandomHexColor()}; width:${
        30 + 10 * (i + lastBoxNumber)
      }px; height: ${
        30 + 10 * (i + lastBoxNumber)
      }px; display: flex; justify-content: center; align-items: center;`
    );
    box.innerText = i + 1;
    userBoxes.push(box);
  }

  lastBoxNumber += amount;
  boxesElement.append(...userBoxes);
}

function destroyBoxes() {
  boxesElement.innerHTML = '';
  lastBoxNumber = 0;
}
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
