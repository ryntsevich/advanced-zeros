module.exports = function getZerosCount(number, base) {
  let newbase = base;
  let result = null;
  for (let i = 2; i <= base; i++) {
    if (newbase % i === 0) {
      let countMultiplierI = 0;
      while (newbase % i === 0) {
        newbase = Math.floor(newbase / i);
        countMultiplierI++;
      }
      let number3 = number;
      let countMultiplierFactorial = 0;
      while (number3 / i > 0) {
        countMultiplierFactorial = countMultiplierFactorial + Math.floor(number3 / i);
        number3 = Math.floor(number3 / i);
      }
      if (result === null || Math.floor(countMultiplierFactorial / countMultiplierI) < result) {
        result = Math.floor(countMultiplierFactorial / countMultiplierI);
      }
    }
  }
  return result;
}