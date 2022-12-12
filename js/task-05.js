const inputElement = document.querySelector('input#name-input');
const outputSpanElement = document.querySelector('span#name-output');

inputElement.addEventListener('input', onChangeOutputElement);

function onChangeOutputElement() {
  const value = inputElement.value;
  outputSpanElement.textContent = !value ? 'Anonymous' : value;
}

// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна
//  отображаться строка "Anonymous".
