function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorElement = document.querySelector('button.change-color');
const bodyElement = document.querySelector('body');
const spanElement = document.querySelector('span.color');

buttonChangeColorElement.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const newColor = getRandomHexColor();
  bodyElement.setAttribute('style', `background-color: ${newColor}`);
  spanElement.textContent = newColor;
}

// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн
// стиль при клике на button.change-color и выводит значение цвета в span.color.
