/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const poundsInAKilo = 2.2046;
const gramsInAKilo = 0.001;
const ouncesInAKilo = 35.274;

const kiloElement = document.getElementById("kilos");
const poundElement = document.getElementById("outputPounds");
const gramsElement = document.getElementById("outputGrams");
const ouncesElement = document.getElementById("outputOunces");

const calculatePounds = (kilos) => kilos * poundsInAKilo;
const calculateGrams = (kilos) => kilos * gramsInAKilo;
const calculateOunces = (kilos) => kilos * ouncesInAKilo;

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  poundElement.textContent = calculatePounds(kiloElement.value);
  gramsElement.textContent = calculateGrams(kiloElement.value);
  ouncesElement.textContent = calculateOunces(kiloElement.value);
  console.log(kiloElement.value);
});
