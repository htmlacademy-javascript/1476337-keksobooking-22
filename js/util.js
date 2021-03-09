export {
  getRandomInteger,
  getRandomFloatingPoint,
  getRandomElement,
  getArrRandomLength
};

// Функция, возвращающая случайное число из переданного диапазона включительно min ... max
const getRandomInteger = function (min, max) {
  const randomNumber = min + Math.random() * (max - min + 1);
  if (min < 0) {
    return new Error('Диапазон может быть больше или равен нулю')
  } else if (min >= max) {
    return new Error('Начальное значение диапазона не должно быть больше или равным конечному');
  } else {
    return Math.floor(randomNumber);
  }
}

alert(getRandomInteger(1, 50));

// Функция, возвращающая случайное число с плавающей точкой
const getRandomFloatingPoint = function (min, max, decimalDigits) {
  if (min < 0) {
    return new Error('Диапазон может быть больше или равен нулю');
  } else if (decimalDigits < 0) {
    return new Error('Кол-во чисел после запятой может быть больше или равен нулю');
  } else if (min >= max) {
    return new Error('Начальное значение диапазона не должно быть больше или равным конечному');
  } else {
    return Number((Math.random() * (max - min) + min).toFixed(decimalDigits));
  }
}
alert(getRandomFloatingPoint(0, 9.9, 3));

// Функция, возвращающая случайный элемент массива
const getRandomElement = (items) => {
// "|" for a kinda "int div"
  return items[items.length * Math.random() | 0];
}

// Функция, возвращающая массив из случайных элементов заданного массива
const getArrRandomLength = (arr) => {
  return arr.slice(0, getRandomInteger(0, arr.length - 1));
};
