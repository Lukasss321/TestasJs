/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), 
kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor() {}

  sum(number1, number2) {
    return number1 + number2;
  }
  subtraction(number1, number2) {
    return number1 - number2;
  }
  multiplication(number1, number2) {
    return number1 * number2;
  }
  division(number1, number2) {
    return number1 / number2;
  }
}

const calculator = new Calculator();
console.log(calculator.sum(10, 2));
console.log(calculator.subtraction(10, 2));
console.log(calculator.multiplication(10, 2));
console.log(calculator.division(10, 2));
