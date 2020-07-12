// Напиши функцию formatString(string) принимающую строку в параметр string.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и
// добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// 1.Записываем функцию
// 2. Ограничить строку до 40 символов
// 3. Если нет,то в конец строки добавить ...


function formatString(string) {
  let symbols = string.slice(0, 40);
  if (string.length > symbols.length) {
    symbols += '...';
  }
  return symbols;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
