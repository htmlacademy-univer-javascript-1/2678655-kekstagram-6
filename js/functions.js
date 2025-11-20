function isLengthValid(str, len) {
  return str.length <= len;
}

function isPalindrome(str){
  const validateStroke = str.replaceAll(' ','').toLowerCase();
  const reversedStroke = validateStroke.split('').reverse().join('');
  return validateStroke === reversedStroke;
}

function number(str) {
  let result = '';
  const validateStroke = str.replaceAll(' ','');
  if(validateStroke)
  for (let i = 0; i < validateStroke.length; i++) {
    if (!isNaN(validateStroke[i])) {
      result += validateStroke[i];
    }
  }
  return result;
}
console.log(number('а я томат'))
