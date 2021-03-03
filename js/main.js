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


const types = ['palace', 'flat', 'house', 'bungalow']
const checks = ['12:00', '13:00', '14:00']
const titles = ['двухместный номер', 'трёхместный номер', 'номер кинг сайз']
const rooms = [25, 30, 45]
const guests = [2, 1]
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const description = 'Помещение большое. В нем трое окон и справа от дверей стоят книжные шкафы.';
const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

// Функция, возвращающая случайный элемент массива
const getRandomElement = (items) => {
// "|" for a kinda "int div"
  return items[items.length * Math.random() | 0];
}

// Функция, возвращающая массив из случайных элементов заданного массива
const getArrRandomLength = (arr) => {
  return arr.slice(0, getRandomInteger(0, arr.length - 1));
};

const createOffer = () => {
  const offers = []
  for (let i = 0; i < 10; i++) {
    const x = getRandomFloatingPoint(35.65000, 35.70000, 5)
    const y = getRandomFloatingPoint(139.70000, 139.80000, 5)
    const offer = {
      author: {
        avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
      },
      offer: {
        title: getRandomElement(titles),
        address: getRandomFloatingPoint(x, y),
        price: getRandomInteger(10, 100),
        type: getRandomElement(types),
        rooms: getRandomElement(rooms),
        guests: getRandomElement(guests),
        checkin: getRandomElement(checks),
        checkout: getRandomElement(checks),
        features: getArrRandomLength(features),
        description: description,
        photos: getArrRandomLength(photos),
      },
      location: {
        x: getRandomFloatingPoint(35.65000, 35.70000, 5),
        y: getRandomFloatingPoint(139.70000, 139.80000, 5),
      },

    }

    offers[i] = offer


  }

  return offers;

}

const offers = createOffer();
console.log(offers);
