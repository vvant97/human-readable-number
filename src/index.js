module.exports = function toReadable (number) {
  
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const dozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
                 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 
                    'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

  const valueToString = String(number);
  const valueStringLength = valueToString.length;
  const valueFirstIndex = valueToString[0];
  const valueSecondIndex = valueToString[valueStringLength - 2];
  const valueLastIndex = valueToString[valueStringLength - 1];

  let result = '';

  if (number > 0 && number < 10) {
    result = `${units[valueFirstIndex]}`;
  } else if (number > 9 && number < 20) {
    result = `${dozen[valueLastIndex]}`;
  } else if (number > 19 && number < 100) {
    result = `${dozens[valueFirstIndex - 2]} ${units[valueLastIndex]}`;
  } else if (valueSecondIndex < 1 && valueLastIndex >= 0) {
    result = `${hundreds[valueFirstIndex - 1]} ${units[valueLastIndex]}`;
  } else if (valueSecondIndex >= 1 && valueSecondIndex < 2) {
    result = `${hundreds[valueFirstIndex - 1]} ${dozen[valueLastIndex]}`;
  } else if (valueSecondIndex >= 2) {
    result = `${hundreds[valueFirstIndex - 1]} ${dozens[valueSecondIndex - 2]} ${units[valueLastIndex]}`;
  } else {
    result = number === 0 ? 'zero' : false;
  }

  return result.trim();

};