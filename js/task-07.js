const inputElement = document.querySelector('input#font-size-control');
const spanElement = document.querySelector('span#text');

inputElement.addEventListener('input', changeFontSize);

function changeFontSize() {
  spanElement.setAttribute('style', `font-size: ${inputElement.value}pt`);
}

// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании
//  ползунка будет меняться размер текста.
