// // /* -------------------------------
// // Exercise 1.

// // Turite masyvą su raidėmis.
// // Parašykite kodą, kuris suskaičiuos visas "a" raides.
// // Gautą skaičių išspausdinkite konsolėje.

// // Rezultatas: 4

// // Bonus: Sujunkite vertes į vieną 'string'.
// // Hint: google js join.

// // */

// // // const letters = [
// // //   "L",
// // //   "a",
// // //   "b",
// // //   "a",
// // //   " ",
// // //   "d",
// // //   "i",
// // //   "e",
// // //   "n",
// // //   "a",
// // //   ",",
// // //   " ",
// // //   "s",
// // //   "u",
// // //   " ",
// // //   "v",
// // //   "i",
// // //   "š",
// // //   "t",
// // //   "i",
// // //   "e",
// // //   "n",
// // //   "a",
// // // ];
// // // const allA = [];

// // // for (let i = 0; i < letters.length; i++) {
// // //   const currentLetter = letters[i];

// // //   if (currentLetter === "a") {
// // //     console.log(currentLetter);
// // //     allA.push(currentLetter);
// // //   }
// // // }
// // // console.log(allA.length);
// // // console.log(letters.join(""));
// // /*
// // Exercise 2.

// // 1. Išsirinkite LYGINIUS skaičius ir juos pakelkite kvadratus.
// // Išspausdinkite naują masyvą
// // Rezultatas: [484, 2116, 7396, 9604]

// // 2. Naudodami pirminį masyvą, suskaičiuokite visų skaičių
// // sumą.
// // Gautą vertę taip pat išspausdinkite
// // Rezultatas: 468

// // */

// // // const allNums = [11, 22, 33, 46, 75, 86, 97, 98];

// // ///////////////////////////////////////////////////////////////////////////////
// // ///////////////////////////////////////////////////////////////////////////////
// // // Exercise 3.
// // //
// // // Objektai netyčia pavirto į spaghetti code! Turime masyvą, kuriame yra
// // // du atskiri masyvai, anksčiau reprezentavę objektus.
// // // Jų viduje turime atskirus masyvus su dviem elementais, kurie
// // // reprezentuoja key - value poras, pavyzdžiui:
// // //
// // //    (key)      (value)
// // // "firstName": "Vasanath"
// // //
// // // Parašykite funkciją, kuriai padavus žemiau nurodytą kintamąjį, konsolėje
// // // būtų atvaizduotas masyvas su jo viduje esančiais dviem objektais.

// // // const spaghettiCode = [
// // //   [
// // //     ["firstName", "Vasanth"],
// // //     ["lastName", "Raja"],
// // //     ["age", 24],
// // //     ["role", "JSWizard"],
// // //   ],
// // //   [
// // //     ["firstName", "Sri"],
// // //     ["lastName", "Devi"],
// // //     ["age", 28],
// // //     ["role", "Coder"],
// // //   ],
// // // ];

// // // const obj = {};
// // // obj {array(0)}
// // // {
// // //   firstName: "Vasanth",
// // //   lastName: "Raja",
// // //   age: 24,
// // //   role: JSWizard
// // // }

// // // console.log(spaghettiCode);

// // ///////////////////////////////////////////////////////////////////////////////
// // ///////////////////////////////////////////////////////////////////////////////
// // // Exercise 4.
// // //
// // // Suraskite bug'ą "B" obuolio "A" viduje!
// // // Turite masyvą masyvų, kuriuose kiekvienas elementas yra "A" raidė, tačiau
// // // kartais gali pasitaikyti vienas bug'as ("B raidė").
// // //
// // // Jūsų užduotis - parašyti funkciją, kuri grąžins bug'o koordinates tokiu
// // // formatu - [x, y].
// // // Bug'as visada bus tik vienas.
// // //
// // // Pavyzdžiui:
// // // [
// // //   ["B", "A", "A", "A", "A"], <- Bug'as [0, 0] pozicijoje
// // //   ["A", "A", "A", "A", "A"],
// // //   ["A", "A", "A", "A", "A"],
// // //   ["A", "A", "A", "A", "A"],
// // //   ["A", "A", "A", "A", "A"]
// // // ]

// // // const appleOne = [
// // //   ["A", "A", "A", "A", "A"],
// // //   ["A", "B", "A", "A", "A"],
// // //   ["A", "A", "A", "A", "A"],
// // //   ["A", "A", "A", "A", "A"],
// // //   ["A", "A", "A", "A", "A"],
// // // ]; // [1, 1]

// // // const appleTwo = [
// // //   ["A", "A", "A", "A", "A"],
// // //   ["A", "A", "A", "A", "A"],
// // //   ["A", "A", "A", "B", "A"],
// // //   ["A", "A", "A", "A", "A"],
// // //   ["A", "A", "A", "A", "A"],
// // // ]; // [3, 2]

// // // const first = [];

// // // for (let i = 0; i < appleOne.lenght; i++) {
// // //   console.log(appleOne[i]);
// // //   console.log(i);
// // // }

// // // const findBug = (array) => {
// // //   const coordinates = [];
// // //   for (let y = 0; y < array.lenght; y++) {
// // //     const line = array[y];

// // //     for (let x = 0; x < line.lenght; x++) {
// // //       const letter = line[x];

// // //       if (letter === "B") {
// // //         coordinates.push(x);
// // //         coordinates.push(y);
// // //       }
// // //     }
// // //   }

// // //   return coordinates;
// // // };

// // // const one = findBug(appleOne);

// // // const two = findBug(appleTwo);

// // // console.log(one, two);

// // //========================================================================//

// // // var a = 5;
// // // var b = "5";

// // // if (a === b) {
// // //   console.log("true");
// // // } else {
// // //   console.log("false");
// // // }

// // // //========================================//

// // // let playerOne = 500;
// // // let playerTwo = 600;

// // // if (playerOne > playerTwo) {
// // //   highscore = playerOne;
// // // } else {
// // //   highscore = playerTwo;
// // // }
// // // //====================================================//

// // // var a = 0;

// // // while (a < 10) {
// // //   console.log(a + "Hello World!");
// // //   a++;
// // // }

// // // //======================================

// // // for (i = 0; i < 20; i++) {
// // //   console.log(i + " Hi There!");

// // //   if (i === 6) {
// // //     console.log("We have reached 6");
// // //     continue;
// // //   }
// // // }

// // //===============================================================//
// // /* DOM - Document Object Model

// // */

// // // const commentdForm = document.getElementById("Comments-form");

// // // commentsForm && commentdForm, addEventListener;

// // const appleOne = [
// //   ["A", "A", "A", "A", "A"],
// //   ["A", "B", "A", "A", "A"],
// //   ["A", "A", "A", "A", "A"],
// //   ["A", "A", "A", "A", "A"],
// //   ["A", "A", "A", "A", "A"],
// // ]; // [1, 1]

// // const appleTwo = [
// //   ["A", "A", "A", "A", "A"],
// //   ["A", "A", "A", "A", "A"],
// //   ["A", "A", "A", "B", "A"],
// //   ["A", "A", "A", "A", "A"],
// //   ["A", "A", "A", "A", "A"],
// // ]; // [3, 2]

// // //Kordinaciu grazinimas, tik paprasciau, ysivedam forloopa/ if'a ir jis grazintu dvieju kintamuju pozicija//
// // const first = [];
// // let atsakymas;

// // for (let i = 0; i < appleOne.length; i++) {
// //   let sarasas = appleOne[i];
// //   for (let a = 0; a < sarasas.length; a++) {
// //     if (sarasas[a] == "B") {
// //       atsakymas = [i, a];
// //       // console.log([i, a]);
// //     }
// //   }
// // }

// // console.log(atsakymas);
// // console.log("-----------------------------------------------");

// // function ieskomBugo() {
// //   // console.log("funckijaVeikia");
// //   for (let i = 0; i < appleOne.length; i++) {
// //     let sarasas = appleOne[i];
// //     for (let a = 0; a < sarasas.length; a++) {
// //       if (sarasas[a] == "B") {
// //         // atsakymas = [i, a];
// //         // console.log([i, a]);
// //         return [i, a];
// //       }
// //     }
// //   }
// // }

// // console.log(ieskomBugo());
// // console.log("----------------------------------------------------------");

// // function ieskomBugo2(arejus) {
// //   // console.log("funckijaVeikia");
// //   for (let i = 0; i < arejus.length; i++) {
// //     let sarasas = arejus[i];
// //     for (let a = 0; a < sarasas.length; a++) {
// //       if (sarasas[a] == "B") {
// //         // atsakymas = [i, a];
// //         // console.log([i, a]);
// //         return [a, i];
// //       }
// //     }
// //   }
// // }

// // console.log(ieskomBugo2(appleOne));
// // console.log(ieskomBugo2(appleTwo));

// // console.log("-----------------------------");

// // let ieskomBugo3 = function (arejus) {
// //   // console.log("funckijaVeikia");
// //   for (let i = 0; i < arejus.length; i++) {
// //     let sarasas = arejus[i];
// //     for (let a = 0; a < sarasas.length; a++) {
// //       if (sarasas[a] == "B") {
// //         // atsakymas = [i, a];
// //         // console.log([i, a]);
// //         return [a, i];
// //       }
// //     }
// //   }
// // };

// // console.log(ieskomBugo3(appleOne));
// // console.log(ieskomBugo3(appleTwo));

// // console.log("------------------------------------------");

// // let ieskomBugo4 = (arejus) => {
// //   // console.log("funckijaVeikia");
// //   for (let i = 0; i < arejus.length; i++) {
// //     let sarasas = arejus[i];
// //     for (let a = 0; a < sarasas.length; a++) {
// //       if (sarasas[a] == "B") {
// //         // atsakymas = [i, a];
// //         // console.log([i, a]);
// //         return [i, a];
// //       }
// //     }
// //   }
// // };

// // console.log(ieskomBugo4(appleOne));
// // console.log(ieskomBugo4(appleTwo));

// // console.log(
// //   "------------------------------------------------------------------------"
// // );
// // console.log(appleTwo[2][3]);
// // console.log(appleOne[1][1]);
// // // const first = [];

// // // for (let i = 0; i < appleOne.lenght; i++) {
// // //   // console.log(appleOne[i]);
// // //   // console.log(i);
// // //   let sarasas = appleOne[i];
// // //   for (let a = 0; a < sarasas.length; a++) {
// // //     // console.log(a);
// // //     // console.log(sarasas[a]);

// // //     if (sarasas[a] == "B") {
// // //       console.log("--------------------------------");
// // //       console.log(i);
// // //       console.log(a);
// // //       console.log("--------------------------------");
// // //       console.log([i, a]);
// // //     }
// // //   }
// // // }

// // // console.log(appleOne);
// // console.log(
// //   "----------------------------------------------------------------------------"
// // );

// // function miestai(Vardas, Miestas) {
// //   // console.log("Koma");
// //   // console.log("Ieva");
// //   console.log(Vardas);
// //   console.log(Miestas);
// // }

// // miestai("Rokas", "Kalabybishkis");
// // console.log(
// //   "========================================================================"
// // );

// // let sarasas = ["A", "B", "C"];

// // function paimuAreju(arejus) {
// //   console.log(arejus);
// // }

// // paimuAreju(sarasas);

// // console.log(
// //   "-----------------------------------------------------------------------------"
// // );

// // let vardas = "Rokas";
// // let miestas = "Kaunas";

// // function grazinuVardaIrMiesta(GaunuVarda, GaunuMiesta) {
// //   console.log(GaunuVarda);
// //   console.log(GaunuMiesta);
// // }

// // grazinuVardaIrMiesta(miestas, vardas);

// // //====================================================================================================

// // let krepselis = [
// //   {
// //     rusis: "Obuolys",
// //     kaina: "2.99",
// //   },
// //   {
// //     rusis: "Apelsinas",
// //     kaina: "1.79",
// //   },
// //   {
// //     rusis: "Agurkas",
// //     kaina: "0.99",
// //   },
// // ];
// // // Padaryti funkcija kuriai paduosit krepselis
// // // Ji ta krepselis funkcijoje ides i for loop'a
// // // Ir grazins sarasa po viena i konsole:
// // // Obuolys kainuoja 2.99
// // // Apelsinas kainuoja 1.99
// // // Agurkas kainuoja 0.99

// // function gaunuRusiIrKaina(produktuSaras) {
// //   console.log(produktuSaras);
// //   for (let i = 0; i < produktuSaras.length; i++) {
// //     console.log(produktuSaras[i]);
// //     let manoObjektas = produktuSaras[i];
// //     console.log(
// //       manoObjektas.rusis + " " + "kainuoja" + " " + manoObjektas.kaina
// //     );
// //     console.log(manoObjektas.kaina);
// //   }
// // }

// // gaunuRusiIrKaina(krepselis);

// // // console.log(krepselis);
// // console.log("--------------------------------------------------");

// // const name = "Dev Ed";
// // //=============================================================//

// // let kazkas = "Povilaitis";
// // console.log(kazkas.length);
// //=================================================//

// console.log(
//   "-----------------------------------------------------------------------------"
// );

// const divas = document.createElement("div");

// divas.innerText = "Tekstas";
// divas.className = "testas";

// document.body.appendChild(divas);

// console.log(divas);

// console.log(
//   "-----------------------------------------------------------------------------"
// );
// //===========================================================//
// let myAge = "39";

// if (myAge > 30) {
//   document.write("you are over 30!");
// } else if (myAge > 20) {
//   document.write("you are over 20!");
// } else if (myAge > 10) {
//   document.write("you are over 10!");
// } else {
//   document.write("you are not over 10!");
// }
//===========================================================//

// function alertName(name) {
//   alert(name);
// }
// function consoleName(name) {
//   console.log(name);
// }
// function sumNumber(num1, num2) {
//   let sum = num1 + num2;
//   console.log(sum);
// }

// function coreFunction(name, functionParam) {
//   functionParam(name);
// }

// coreFunction("PetroPazastys", consoleName);
//=============================================================================//

// let masyvas = [1, 3, 5, 3, 6, 8, 18, 4, 64, 13, 75];
// let masyvasString = ["a", "b", "c"];

// let suma = 0;

// for (let i = 0; i < masyvas.length; i++) {
//   suma += masyvas[i];
// }

// // console.log(suma);

// let = sumaForEach = 0;

// masyvas.forEach((value, index, array) => {
//   // console.log(value);
//   // console.log(index);
//   // console.log(array);
//   // console.log("-------------------------");
//   sumaForEach += value;
// });

// console.log(sumaForEach);

// //=====================================//

// console.log("------------------------------------");

// let autoMasyvas = ["BMW", "VM", "AUDI"];

// autoMasyvas.forEach((value, index, array) => {
//   console.log(value);
//   console.log(index);
//   console.log(array);
//   console.log("-------------------------");
//   // sumaForEach += value;
// });

// // console.log(autoMasyvas);

// //===================================================//

// const cars = ["BMW", "VW", "AUDI"];

// cars.forEach((car) => {
//   console.log(car);
// });
// //===================================================//

// console.log(masyvas);

// masyvas.map((value) => {
//   value += 1;
// });

// console.log(masyvas);

// console.log("-------------------------");

// const vardai = ["peTras", "Jonas", "aNTanas", "janiNa"];

// vardai.push("PetroKumpis");

// const correctVardai = vardai.map((vardas) => {
//   return vardas.charAt(0).toUpperCase() + vardas.slice(1).toLocaleLowerCase();
// });

// console.log(correctVardai);

// console.log("-------------------------");

// // console.log(correctVardai);

// // console.log(vardai);

// // vardai.map((value) => {
// //   console.log(value);
// // });

// // console.log(vardai);

// console.log("-------------------------");

// console.log(correctVardai.includes("petras"));

// console.log("Petras" == "petras");

// //==============================//

// //.filter()

// masyvas = [1, 3, 5, 3, 6, 8, 18, 4, 64, 13, 75];

// const masyvasFiltered = masyvas.filter((skaicius) => {
//   return skaicius > 55;
// });

// console.log(masyvasFiltered);

// console.log("-------------------------");

// const bigMasyvas = [1, 3, 5, 3, 6, 8, 18, 4, 64, 13, 75];

// const masyvasFilt = bigMasyvas.filter((skaicius1) => {
//   return skaicius1 > 10;
// });

// const masyvasFilt1 = masyvasFilt.filter((skaicius1) => {
//   return skaicius1 < 50;
// });

// console.log(masyvasFilt1);

// console.log("-------------------------");

// const massiveMasyvas = [1, 55, 99, 3, 62, 8, 18, 4, 64, 13, 75];

// console.log(massiveMasyvas);

// console.log("-------------------------");

// .some()

// console.log(masyvas.every((vardas) => vardas > 0));

// // Array.from()

// const shudas = Array.from("Shudas");

// console.log(shudas);

// //================================================//

// console.log("-------------------------");

// let massMasyvas = [1, 2, 3, 4, 5, 6];

// console.log(typeof massMasyvas);

// console.log(massMasyvas.length);

//masyvas forEach ----> Array klases metodas.
//Kas yra objektai? properties? metodai? Klase- Objekto aprasas/blueprint.
// Mes kai sukuriam objekta - kazkokios klases pagrindu.
//Masyvas kaip toks yra objektas + jo metodai/funkcijos, galimybes apdoroti duomenis.
// Tam masyve
// Masyvas vs objektas

// let objektas = {
//   vardas: "Matas",
//   isspausdink: function () {
//     console.log(this.vardas);
//   },
// };

// let objektas2 = new Object();

// //====================================================//

// let massMasyvas1 = [1, 2, 3, 4, 5, 6];

// const zodziuMasyvas = ["a", "b", "c", "d"];

// let suma2 = massMasyvas1.reduce((total, value) => {
//   return total + value;
// }, 0);

// console.log(suma2);

// console.log("-------------------------");

// let masyvasMass = [
//   1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// let suma3 = masyvasMass.reduce((total, value) => {
//   return value;
// }, 20);

// console.log(suma3);

// //=======================================================//

// let masyvasMass55 = [1, 2, 3];

// let suma4 = masyvasMass55.reduce((total, value) => {
//   return Math.max(total, value);
// }, 0);

// console.log(suma4);

// //==================================//

// // if (value > total) {
// //   return value;
// // } else {
// //   return total;
// // }

// // return value > total ? value : total;

// //===================================//

// // const superCars = ["BMW", "Volvo", "Audi", "Opel", "Renault"];

// // console.log(superCars.sort());

// const numbersMasyvas = [11, 12, 13];

// console.log(
//   numbersMasyvas.sort((number1, number2) => {
//     if (number1 - number2 > 0) {
//       return 1;
//     } else if (number1 - number2 < 0) {
//       return -1;
//     } else {
//       return 0;
//     }
//   })
// );

// //===========================================================//

// const people = [
//   {
//     name: "Petras",
//     age: "18",
//   },
//   {
//     name: "Jonas",
//     age: 15,
//   },
//   {
//     name: "Antanas",
//     age: 20,
//   },
//   {
//     name: "Urtė",
//     age: 10,
//   },
//   {
//     name: "Diana",
//     age: 25,
//   },
//   {
//     name: "Ieva",
//     age: 16,
//   },
// ];

//isfiltruoti, kad rodytu, tik pilnamecius//

// function bilekas() {
//   // console.log("funckijaVeikia");
//   for (let i = 0; i < people.length; i++) {
//     let sarasas = people[i];
//     for (let a = 0; a < sarasas.length; a++) {
//       if (sarasas[a] == "18") {
//         // atsakymas = [i, a];
//         // console.log([i, a]);
//         return [i, a];
//       }
//     }
//   }
// }

// bilekas();
// console.log(people.filter((person) => person.age >= 18));

// console.log(
//   people
//     .filter((person) => person.age >= 18)
//     .map((person) => person.name)
//     .sort()
// );

// //=======================================================================//

// const kainos = [
//   {
//     name: "lemonade",
//     price: 50,
//   },
//   {
//     name: "lime",
//     price: 15,
//   },
// ];

// const kainosSurusiuotos = kainos.sort((item1, item2) => {
//   return item1.price - item2.price;
// });

// console.log(kainosSurusiuotos[0]);
// console.log(kainosSurusiuotos[kainosSurusiuotos.length - 1]);

// rastiPigiausiaBrangiausia(array) {

//   array.sort ((item1, item2) => {
//     return item1.price - item2.price;
//   });.map((item) => item.name);

//   return { brangiausias: array [0], pigiausias: "lime" };
// }

// console.log(rastiPigiausiaBrangiausia);

// console.log(kainos);

//Funkcija//
// function name3(vardas) {
//   console.log(vardas);
// }

// name3("Vardas");

// let sarasas = [1, 2, 3, 4];

//Forloop'as
// for (let i = 0; i <= 100; i++) {
//   //   console.log([i]);
//   const para = document.createElement("button");
//   para.innerText = [i];
//   document.body.appendChild(button);
// }

//===================================//
// let klausimas = prompt("kiek tau metu?")

//================================================//
// function SpaudziuMygte() {
//   console.log("A rodo?");
// }

// SpaudziuMygte();
//==============================================================//
// const buttons = document.createElement("button");
// buttons.innerText = "Your Age";
// document.body.appendChild(buttons);
// buttons.style.margin - "100px";
// buttons.style.padding - "100px";

// function removeElements(className) {
//   const elements = document.getElementsByClassName("leidimas");
//   for (let i = 0; i < elements.length; i++);
//   elements[i].remove();
// }

// function arbaArba() {
//   let age = prompt("Kiek jums yea metu?");
//   let atsakymas = document.createElement("div");
//   atsakymas.className = "leidimas";
//   atsakymas.innerText = "nesvaik";

//   if (age > 0 && age < 18) {
//     const nieko = document.createElement("div");
//     nieko.innerText = "Jus negalite nusipirkti nieko skanaus - sorry";
//     nieko.style.backgroundColor = "yellow";
//     document.body.appendChild(nieko);
//   } else if (age >= 18 && age < 20) {
//     const energuDrinkas = document.createElement("div");
//     energuDrinkas.innerText = "Gali pirkti energetiny bet ne alko";
//     energuDrinkas.style.backgroundColor = "brown";
//     document.body.appendChild(energuDrinkas);
//   } else if (age >= 20 && age < 99) {
//     const galiImt = document.createElement("div");
//     galiImt.innerText = "Jau gali imt, atsipalaiduok";
//     galiImt.style.backgroundColor = "orange";
//     document.body.appendChild(galiImt);
//   } else {
//     const lops = document.createElement("div");
//     lops.innerText = "Nu, baik jau nesamones rasinet";
//     lops.style.backgroundColor = "skyblue";
//     document.body.appendChild(lops);
//   }
//   document.body.appendChild(atsakymas);
// }
// buttons.addEventListener("click", arbaArba);
// arbaArba();
// removeElements();

//=========================================================//

// let employee = {
//   name: "Matas",
//   surname: "Kalina",
// };

// let emplyoee2 = new Object();

// emplyoee2.name = "Matas";
// emplyoee2.name = "Kalina";

// function Employee3(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// let employee3

// class Employee {}

//=====================================================================//

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   addToTable() {}
// }

// function createPersonObject(event) {
//   event.preventDefault();

//   const nameSurname = document.querySelector("#forma > input").value;

//   const nameSurnameArray = nameSurname.split("    ");

//   console.log(nameSurnameArray);
// }

// document
//   .querySelector("#forma > button")
//   .addEventListener("click", createPersonObject);

//====================================================================================//
// function test(a) {
//   let greeting = "Hi! My name is " + a;
//   return greeting;
// }

// console.log(test("Nick"));
//==========================================================================================//

// let person = new Object();

// person.name = "Daniel";
// person.eyeColor = "Blue";
// person.age = 27;

// person.updateAge = function () {
//   return ++person.age;
// };

// console.log(person.age);
// person.updateAge();
// console.log(person.age);
// person.updateAge();
// console.log(person.age);

//===================================================//

// let person = {
//   name: "Daniel",
//   eyeColor: "blue",
//   age: 27,
//   updateAge: function () {
//     return ++person.age;
//   },
// };

//==========================================================================//

// function testExample(a) {
//   let greeting = "Hi! My name is " + a;
//   return greeting;
// }
// let name = "Daniel";
// console.log(testExample(name));

//==============================================//

// let testExample = function (a) {
//   let greeting = "Hi! My name is " + a;
//   return greeting;
// };

// console.log(testExample("BybioKotas"));

//==============================================================//

// (function () {
//   let greeting = "Hi! My name is Jevgenij ";
//   console.log(greeting);
// })();

//========================================================//
// class Deze {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
//   turnOnTheEngine(kasUzvede) {
//     console.log(
//       this.model + " " + this.year + " " + this.color + " " + kasUzvede
//     );
//   }
// }

// const audi = new Deze("BMWxxxx3000", 2222, "Juoda Kaip Katinas");

// audi.turnOnTheEngine("Uzvede Dede");

// //======================================================================//
// function vardas(vardas, antrasVardas) {
//   console.log("funkcija vardas");
//   console.log(vardas, antrasVardas);
// }

// vardas("Rokas", "Petras");
//================================================================//

// funckija sukuria h1, ideda paduota teksta ir grazina h1
// function susikuriuh1(ateinaKazkoksTekstas) {
//   let h1 = document.createElement("h1");
//   h1.textContent = ateinaKazkoksTekstas;
//   return h1;
// }
// function vardas(vardas, antrasVardas, kurIdeti) {
//   // cia gaunu jau sukurta h1 su mano paduotu teksta
//   let sukurtasH1 = susikuriuh1(vardas + " " + antrasVardas);
//   // cia appendu savo h1 i elemta
//   kurIdeti.appendChild(sukurtasH1);
// }
// // elemetas example
// let example = document.getElementById("example");
// let darVienasH1 = susikuriuh1("cia tas kitas h1");
// let darVienasH2 = susikuriuh1("cia tas kitas h2");
// let darVienasH3 = susikuriuh1("cia tas kitas h3");
// let darVienasH4 = susikuriuh1("cia tas kitas h4");
// example.appendChild(darVienasH1);
// example.appendChild(darVienasH2);
// example.appendChild(darVienasH3);
// example.appendChild(darVienasH4);
// // paduodu vardus ir elemeta

// <form>//     <div className="mb-3">//         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>//         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>//     </div>//     <div className="mb-3">//         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>//         <input type="password" className="form-control" id="exampleInputPassword1">//     </div>//     <div className="mb-3 form-check">//         <input type="checkbox" className="form-check-input" id="exampleCheck1">//             <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>//     </div>//     <button type="submit" className="btn btn-primary">Submit</button>// </form>//
// pasileidziam funkcija kuri sukuria forma ir ideda i html
// joje turit panaudoti tris funkcijas kuri sukuria email input, suskuria password input, sukuria checkbox
// funkcija sukuria email input, mes i ja norim paduoti: Email address,
//We'll never share your email with anyone else.
//funkcija kuri suskuria password input paduoti: Password
//funnkcija sukuria checkbox paduoti: Check me out

//========================================================================================//

// function createForm() {
//   let form = document.createElement("form");
//   document.querySelector("body").append(form);
//   document.body.style.backgroundColor = "grey";
//   // createEmailInput(form);
//   // createPasswordInput(form);
//   // createCheckBox(form);
// }

// createForm();

//================================================================================//

// function createEmailGroup() {
//   let div = document.createElement("div");
//   div.className = "mb-3";

//   let label = document.createElement("label");
//   label.setAttribute("HtmlFor", "exampleInputEmail");
//   label.className = "form-label";
//   label.innerText = "Email address";

//   let inputEl = document.createElement("input");
//   inputEl.setAttribute("type", "email");
//   inputEl.className = "form-control";
//   inputEl.id = "exampleInput1";

//   let infoDiv = document.createElement("div");
//   infoDiv = "emailHelp";
//   infoDiv.className = "form-text";
//   infoDiv.innerText = "We will never share your email with anyone else";
// }

// function createPassword() {}

// function createBox() {}

//==================================================================================//

//Naudojam API gauti duomenis: http://api.tvmaze.com/search/shows?q=golden%20girls
//Uzduotis:
//Kiekviename objekte yra show,o show turi --- weight ---
//Patikrinti ar weight yra daugiau uz 75 ir atvaizduoti objektus su visa informacija, informacija turi buti atvaizduota kortelese,
// kaip nors graziai :)
//Visas html turetu buti sukurtas su JS, stengiames korteles kurima skirstyti i atskiras funkcijas :)
//Papildomai:
//Padaryti input irasyti weight ir tada paspaudus mygtuka rusiuoti, grazinti informacija pagal irasyti weight
//Taip pat galim daryti dar select kuriame butu < daugiau, > maziau, lyg = ir t.t. ir panaudoti kartu su weight :)

fetch("http://api.tvmaze.com/search/shows?q=golden%20girls", {
  method: "GET",
})
  .then((res) => {
    // throw "O kurva"; error'o ismetimas (exception'o ismetimas - manualiiai;- po throw kita logika neina)
    return res.json();
  })
  .then((data) => {
    let cards = parseData(data);

    for (let i = 0; i < cards.length; i++) {
      console.log(cards[i]);
      const cardItem = cards[i];

      let kortele = document.createElement("div");
      let cardHeader = document.createElement("h3");
      let cardListContainer = document.createElement("ul");

      const showObjKeys = Object.keys(cardItem.show);

      showObjKeys.forEach((key) => {
        const showItem = cardItem.show[key];

        let cardListContainerItem = document.createElement("li");
        cardListContainerItem.textContent = showItem;
        cardListContainer.appendChild(cardListContainerItem);
      });

      cardHeader.textContent = cardItem.score;

      kortele.appendChild(cardHeader);
      kortele.appendChild(cardListContainer);

      console.log(kortele);
      //   document.body.appendChild(kortele);
    }
  })
  .catch((error) => console.log(error));

function parseData(data) {
  return data.filter(function (object) {
    return getIsMore(object.show.weight, 75);
  });
}

function getIsMore(weight, moreThan) {
  return weight > moreThan;
}

//==========================================================//
