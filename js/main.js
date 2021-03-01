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

function getRandomElement(items) {
// "|" for a kinda "int div"
  return items[items.length * Math.random() | 0];
}

const CreateOffer = function () {
  const offers = []
  for (let i = 0; i < 9; i++) {
    const offer = {
      author: {
        avatar: 'img/avatars/user0' + i + '.png',
      },
      offer: {
        title: titles[getRandomInteger(0, 2)],
        address: '100, 200',
        price: getRandomInteger(10, 100),
        type: types[getRandomElement(3)],
        rooms: rooms[getRandomElement(25, 30, 45)],
        guests: guests[getRandomElement(2, 1)],
        checkin: checks[getRandomElement('12:00', '13:00', '14:00')],
        checkout: checks[getRandomElement('12:00', '13:00', '14:00')],
        features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
        description: 'small',
        photos: [
          'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
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

const offers = CreateOffer();
console.log(offers);
