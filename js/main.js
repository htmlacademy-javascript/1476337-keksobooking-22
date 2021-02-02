const randomInteger = function (min, max) {
  let rand = min - 0 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert(randomInteger(1, 50));
alert(Math.random());


