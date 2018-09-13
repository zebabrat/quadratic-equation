module.exports = function solveEquation(equation) {
  // your implementation
  const arrayOfCoefficient = equation.split(' ');
  let arrayOfRoots = [];

  const a = Number(arrayOfCoefficient[0]);
  const b = Number(arrayOfCoefficient[3] + arrayOfCoefficient[4]);
  const c = Number(arrayOfCoefficient[7] + arrayOfCoefficient[8]);

  const discriminant = (b * b) - 4 * a * c;

  const rootFirst = Math.round(((-b) + Math.sqrt(discriminant)) / (2 * a));
  const rootSecond = Math.round(((-b) - Math.sqrt(discriminant)) / (2 * a));
  
  arrayOfRoots.push(rootFirst, rootSecond);
  arrayOfRoots.sort((a, b) => a - b);

  return arrayOfRoots
}
