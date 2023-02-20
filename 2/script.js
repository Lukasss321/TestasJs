/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let btn = document.querySelector(".btn");
let number = document.getElementById("btn__state");
let countClicks = 0;

btn.addEventListener("click", function () {
  countClicks += 1;
  number.textContent = countClicks;
  console.log(countClicks);
});
