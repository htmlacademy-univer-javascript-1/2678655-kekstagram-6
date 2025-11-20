function isLengthValid(input, len) {
  return input.toString().length <= len;
}
console.log(isLengthValid('test', 5));// eslint-disable-line no-console

function isPalindrome(input) {
  const validateStroke = input.toString().replaceAll(' ', '').toLowerCase();
  const reversedStroke = validateStroke.split('').reverse().join('');
  return validateStroke === reversedStroke;
}
console.log(isPalindrome('А роза упала на лапу Азора'));// eslint-disable-line no-console

function getDigit(input) {
  if (typeof input === 'number') {
    return Math.abs(input);
  }
  const str = input.toString().replaceAll(' ', '');
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      result += str[i];
    }
  }
  return result ? Number(result) : NaN;
}

console.log(getDigit('а я томат, железный ламинат-31231'));// eslint-disable-line no-console
