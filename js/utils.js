// const PHOTO_COUNT = 25
// const MESSAGE = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
// ];
// const DESCRIPTION = [
//   'На отдыхе в Анапе',
//   'Ослепительное садовое кольцо',
//   'Солнечный пляж '
// ];
// const NAME = [
//   'Макар',
//   'Артем',
//   'Матвей',
//   'Богдан',
//   'Дмитрий'
// ];
// const usedNumbers = [];

// const getRandomUniqueInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));

//   if (usedNumbers.length > (upper - lower + 1)) usedNumbers = [];

//   let result;
//   do {
//     result = Math.floor(Math.random() * (upper - lower + 1)) + lower;
//   } while (usedNumbers.includes(result));

//   usedNumbers.push(result);
//   return result;
// };
// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };
// const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


// const createPhoto = () => ({
//   id: getRandomUniqueInteger(0,25),
//   url: `photos/${getRandomUniqueInteger(1,25)}.jpg`,
//   description: getRandomArrayElement(DESCRIPTION),
//   likes:getRandomInteger(15,200),
//   comments: Array.from({length:getRandomUniqueInteger(1,30)}, createComment)
// });

// const createComment = () => ({
//   id: getRandomUniqueInteger(40,500),
//   avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
//   message: getRandomArrayElement(MESSAGE),
//   name: getRandomArrayElement(NAME)
// })

// const similarPhoto = Array.from({length: PHOTO_COUNT}, createPhoto);


