module.exports = function toReadable (number) {
  
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const dozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
                 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 
                    'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

  const valueToString = String(number);
  const valueStringLength = valueToString.length;
  const valueFirstIndex = valueToString[0];
  const valueSecondIndex = valueToString[valueStringLength - 2];
  const valueLastIndex = valueToString[valueStringLength - 1];

  let result = '';

  let i = 0;

  while (i < valueStringLength) {

    if (number < 10) {
      return `${units[valueFirstIndex]}`;
    } else if (number > 9 && number < 20) {
      return `${dozen[valueLastIndex]}`;
    } else if (number > 19 && number < 100) {
      return `${dozens[valueFirstIndex - 2]} ${units[valueLastIndex].replace('zero', '')}`.trim();
    } else if (number > 99 && number < 1000 && valueSecondIndex < 1 && valueLastIndex >= 0) {
      return `${hundreds[valueFirstIndex - 1]} ${units[valueLastIndex].replace('zero', '')}`.trim();
    } else if (number > 99 && number < 1000 && valueSecondIndex >= 1 && valueSecondIndex < 2) {
      return `${hundreds[valueFirstIndex - 1]} ${dozen[valueLastIndex]}`;
    } else if (number > 99 && number < 1000 && valueSecondIndex >= 2) {
      return `${hundreds[valueFirstIndex - 1]} ${dozens[valueSecondIndex - 2]} ${units[valueLastIndex].replace('zero', '')}`.trim();
    } else {
      return result;
    }

  }

};