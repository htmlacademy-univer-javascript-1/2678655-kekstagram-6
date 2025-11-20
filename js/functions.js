function isLengthValid(str, len) {
  return str.length <= len;
}
console.log(isLengthValid('test', 5));// eslint-disable-line no-console

function isPalindrome(str) {
  const validateStroke = str.replaceAll(' ', '').toLowerCase();
  const reversedStroke = validateStroke.split('').reverse().join('');
  return validateStroke === reversedStroke;
}
console.log(isPalindrome('А роза упала на лапу Азора'));// eslint-disable-line no-console

function number(str) {
  let result = '';
  const validateStroke = str.replaceAll(' ', '');
  if (validateStroke) {
    for (let i = 0; i < validateStroke.length; i++) {
      if (!isNaN(validateStroke[i])) {
        result += validateStroke[i];
      }
    }
  }
  return result;
}

console.log(number('а я томат и жизни рад'));// eslint-disable-line no-console
