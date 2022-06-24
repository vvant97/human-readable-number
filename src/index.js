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

  const conditionOfUnits = (number > 0 && number < 10);
  const conditionOfDozen = (number > 9 && number < 20);
  const conditionOfDozens = (number > 19 && number < 100);
  const conditionOfUnitsInHundreds = (valueSecondIndex < 1 && valueLastIndex >= 0);
  const conditionOfDozenInHundreds = (valueSecondIndex >= 1 && valueSecondIndex < 2);
  const conditionOfDozensInHundreds = (valueSecondIndex >= 2);
  const conditionOfZero = (number === 0 ? 'zero' : false);

  let result = '';

  if (conditionOfUnits) {
    result = `${units[valueFirstIndex]}`;
  } else if (conditionOfDozen) {
    result = `${dozen[valueLastIndex]}`;
  } else if (conditionOfDozens) {
    result = `${dozens[valueFirstIndex - 2]} ${units[valueLastIndex]}`;
  } else if (conditionOfUnitsInHundreds) {
    result = `${hundreds[valueFirstIndex - 1]} ${units[valueLastIndex]}`;
  } else if (conditionOfDozenInHundreds) {
    result = `${hundreds[valueFirstIndex - 1]} ${dozen[valueLastIndex]}`;
  } else if (conditionOfDozensInHundreds) {
    result = `${hundreds[valueFirstIndex - 1]} ${dozens[valueSecondIndex - 2]} ${units[valueLastIndex]}`;
  } else {
    result = conditionOfZero;
  }

  return result.trim();

};