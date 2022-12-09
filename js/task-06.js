const inputElement = document.querySelector('input#validation-input');

inputElement.addEventListener('blur', checkInputElement);

function checkInputElement() {
  const addPrefix = inputElement.value.length < inputElement.dataset.length ? 'in' : '';
  inputElement.classList.add(`${addPrefix}valid`);
  inputElement.classList.remove(`${addPrefix === 'in' ? '' : 'in'}valid`);
}

// console.log(inputElement);

// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
