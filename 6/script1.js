// let skaicius = prompt("lol");

// let suma = 0;

// for (let i = 1; i <= skaicius; i++) {
//   suma = suma + i;
// }

// console.log(suma);

// let naujasskaicius = 0;
// let manoskaicius = 22;
// while (naujasskaicius < manoskaicius) {
//   console.log(naujasskaicius);
//   naujasskaicius++;
// }
// let box1 = document.getElementsByClassName("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementsByClassName("box3");

// box1[0].textContent = "kk";
// box2.innerHTML = "<h1> Nes ydejau y h2</h1>";
// // box3[0].textContent = "It's fancy though tough";

// console.log(box1[0]);
// console.log(box2);
// console.log(box3[0]);

// function vienas() {
//   console.log("vienas");
// }

// function du(vienas, dvi) {
//   console.log("gal gausis kazkas:" + vienas + "" + dvi);
// }
// function trys(vienas, dvi, trys) {
//   console.log("gal gausis kazkas:" + vienas + dvi + trys);
// }

// vienas();
// du("vienas", "dvi");
// trys("vienas", "dvi", "trys");

// function daugyba(pirmasSkaicius, antrasSkaicius, treciasSkaicius) {
//   let atsakymas = (pirmasSkaicius * antrasSkaicius) / treciasSkaicius;
//   console.log(
//     "paduoti skaiciai:" + pirmasSkaicius,
//     antrasSkaicius,
//     treciasSkaicius
//   );
//   console.log("atsakymas:" + atsakymas);
//   return atsakymas;
// }
// let manoSudaugintasAtsakymas = daugyba(10, 10, 5);

// console.log(manoSudaugintasAtsakymas);
//=========================================================//

// let btn1 = document.getElementsByClassName("button1")[0];
// let btn2 = document.getElementsByClassName("button2")[0];
// let boxes = document.getElementsByClassName("box1");
// // console.log(boxes)
// function getRandomColor() {
//   let letters = "0123456789ABCDEF";
//   let color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// btn1.addEventListener("click", function () {
//   // console.log('paspaudziau ant 1 mygt')
//   // boxes[5].textContent = 'naujas tekstas'
//   // boxes[5].style.backgroundColor = getRandomColor()
//   //
//   // console.log(getRandomColor())
//   // ---------------------------------------
//   if (boxes[5].innerText == 6) {
//     boxes[5].style.backgroundColor = getRandomColor();
//   }
//   //   boxes[5].textContent = 89;
//   // console.log(typeof boxes[5].innerText)
//   console.log("pirmas");
// });

// btn2.addEventListener("click", function () {
//   console.log("antras");
//   boxes[1].textContent = "antras pakeistas tekstas";
//   boxes[1].style.backgroundColor = getRandomColor();
// });

// // =========================================================
// const myform = document.getElementById("my-form");

// myform &&
//   myform.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const formData = new formData(myform);

//     const nameValue = formData.get("first-name");
//     const ageValue = formData.get("age");

//     const outputEl = document.getElementById("output");
//     outputEl.textContent = nameValue + ", " + ageValue;
//   });
//==============================================================//

// const coffeeForm = document.getElementById("coffee-form");

// if (coffeeForm) {
//   coffeeForm.addEventListener("Submit", (event) => {
//     event.defaultPrevented();

//     const needSugarEl = document.querySelector("[name=need-sugar]:checked");
//     const needSugar = needSugarEl.value === "true" ? true : false;

//     const doesNeedSugarText = `${needSugar ? "Does" : "Does't"}`;

//     const needExtraSugarEl = document.getElementById("extra");

//     const needExtraSugar = needExtraSugarEl.checked;

//     const doesNeedExtra = needExtraSugar ? ", also needs some extra." : ".";

//     const message = `${doesNeedSugarText} need sugar${
//       needSugar ? doesNeedExtra : "."
//     }`;

//     alert(message);
//   });
// }

//=======================================================================//

// const input = document.getElementById("text");

// const fnEx = () =>

// input &&
//   input.addEventListener("input", function (event) {
//     const ouput = document.getElementById("output");

//     if (output) {
//       output.textContent = event.target.value;
//     }
//     console.log(event);
//   });

/*========================================================================== */
let bigdata = {
  data: [
    { id: "AED", name: "United Arab Emirates Dirham", min_size: "0.01000000" },
    {
      id: "AFN",
      name: "Afghan Afghani",
      min_size: "0.01000000",
    },
    { id: "ALL", name: "Albanian Lek", min_size: "0.01000000" },
    {
      id: "AMD",
      name: "Armenian Dram",
      min_size: "0.01000000",
    },
    { id: "ANG", name: "Netherlands Antillean Gulden", min_size: "0.01000000" },
    {
      id: "AOA",
      name: "Angolan Kwanza",
      min_size: "0.01000000",
    },
    { id: "ARS", name: "Argentine Peso", min_size: "0.01000000" },
    {
      id: "AUD",
      name: "Australian Dollar",
      min_size: "0.01000000",
    },
    { id: "AWG", name: "Aruban Florin", min_size: "0.01000000" },
    {
      id: "AZN",
      name: "Azerbaijani Manat",
      min_size: "0.01000000",
    },
    {
      id: "BAM",
      name: "Bosnia and Herzegovina Convertible Mark",
      min_size: "0.01000000",
    },
    {
      id: "BBD",
      name: "Barbadian Dollar",
      min_size: "0.01000000",
    },
    { id: "BDT", name: "Bangladeshi Taka", min_size: "0.01000000" },
    {
      id: "BGN",
      name: "Bulgarian Lev",
      min_size: "0.01000000",
    },
    { id: "BHD", name: "Bahraini Dinar", min_size: "0.00100000" },
    {
      id: "BIF",
      name: "Burundian Franc",
      min_size: "1.00000000",
    },
    { id: "BMD", name: "Bermudian Dollar", min_size: "0.01000000" },
    {
      id: "BND",
      name: "Brunei Dollar",
      min_size: "0.01000000",
    },
    { id: "BOB", name: "Bolivian Boliviano", min_size: "0.01000000" },
    {
      id: "BRL",
      name: "Brazilian Real",
      min_size: "0.01000000",
    },
    { id: "BSD", name: "Bahamian Dollar", min_size: "0.01000000" },
    {
      id: "BTN",
      name: "Bhutanese Ngultrum",
      min_size: "0.01000000",
    },
    { id: "BWP", name: "Botswana Pula", min_size: "0.01000000" },
    {
      id: "BYN",
      name: "Belarusian Ruble",
      min_size: "0.01000000",
    },
    { id: "BYR", name: "Belarusian Ruble", min_size: "1.00000000" },
    {
      id: "BZD",
      name: "Belize Dollar",
      min_size: "0.01000000",
    },
    { id: "CAD", name: "Canadian Dollar", min_size: "0.01000000" },
    {
      id: "CDF",
      name: "Congolese Franc",
      min_size: "0.01000000",
    },
    { id: "CHF", name: "Swiss Franc", min_size: "0.01000000" },
    {
      id: "CLF",
      name: "Unidad de Fomento",
      min_size: "0.00010000",
    },
    { id: "CLP", name: "Chilean Peso", min_size: "1.00000000" },
    {
      id: "CNH",
      name: "Chinese Renminbi Yuan Offshore",
      min_size: "0.01000000",
    },
    { id: "CNY", name: "Chinese Renminbi Yuan", min_size: "0.01000000" },
    {
      id: "COP",
      name: "Colombian Peso",
      min_size: "0.01000000",
    },
    { id: "CRC", name: "Costa Rican Colón", min_size: "0.01000000" },
    {
      id: "CUC",
      name: "Cuban Convertible Peso",
      min_size: "0.01000000",
    },
    { id: "CVE", name: "Cape Verdean Escudo", min_size: "0.01000000" },
    {
      id: "CZK",
      name: "Czech Koruna",
      min_size: "0.01000000",
    },
    { id: "DJF", name: "Djiboutian Franc", min_size: "1.00000000" },
    {
      id: "DKK",
      name: "Danish Krone",
      min_size: "0.01000000",
    },
    { id: "DOP", name: "Dominican Peso", min_size: "0.01000000" },
    {
      id: "DZD",
      name: "Algerian Dinar",
      min_size: "0.01000000",
    },
    { id: "EGP", name: "Egyptian Pound", min_size: "0.01000000" },
    {
      id: "ETB",
      name: "Ethiopian Birr",
      min_size: "0.01000000",
    },
    { id: "EUR", name: "Euro", min_size: "0.01000000" },
    {
      id: "FJD",
      name: "Fijian Dollar",
      min_size: "0.01000000",
    },
    { id: "FKP", name: "Falkland Pound", min_size: "0.01000000" },
    {
      id: "GBP",
      name: "British Pound",
      min_size: "0.01000000",
    },
    { id: "GBX", name: "British Penny", min_size: "1.00000000" },
    {
      id: "GEL",
      name: "Georgian Lari",
      min_size: "0.01000000",
    },
    { id: "GGP", name: "Guernsey Pound", min_size: "0.01000000" },
    {
      id: "GHS",
      name: "Ghanaian Cedi",
      min_size: "0.01000000",
    },
    { id: "GIP", name: "Gibraltar Pound", min_size: "0.01000000" },
    {
      id: "GMD",
      name: "Gambian Dalasi",
      min_size: "0.01000000",
    },
    { id: "GNF", name: "Guinean Franc", min_size: "1.00000000" },
    {
      id: "GTQ",
      name: "Guatemalan Quetzal",
      min_size: "0.01000000",
    },
    { id: "GYD", name: "Guyanese Dollar", min_size: "0.01000000" },
    {
      id: "HKD",
      name: "Hong Kong Dollar",
      min_size: "0.01000000",
    },
    { id: "HNL", name: "Honduran Lempira", min_size: "0.01000000" },
    {
      id: "HRK",
      name: "Croatian Kuna",
      min_size: "0.01000000",
    },
    { id: "HTG", name: "Haitian Gourde", min_size: "0.01000000" },
    {
      id: "HUF",
      name: "Hungarian Forint",
      min_size: "1.00000000",
    },
    { id: "IDR", name: "Indonesian Rupiah", min_size: "0.01000000" },
    {
      id: "ILS",
      name: "Israeli New Sheqel",
      min_size: "0.01000000",
    },
    { id: "IMP", name: "Isle of Man Pound", min_size: "0.01000000" },
    {
      id: "INR",
      name: "Indian Rupee",
      min_size: "0.01000000",
    },
    { id: "IQD", name: "Iraqi Dinar", min_size: "0.00100000" },
    {
      id: "ISK",
      name: "Icelandic Króna",
      min_size: "1.00000000",
    },
    { id: "JEP", name: "Jersey Pound", min_size: "0.01000000" },
    {
      id: "JMD",
      name: "Jamaican Dollar",
      min_size: "0.01000000",
    },
    { id: "JOD", name: "Jordanian Dinar", min_size: "0.00100000" },
    {
      id: "JPY",
      name: "Japanese Yen",
      min_size: "1.00000000",
    },
    { id: "KES", name: "Kenyan Shilling", min_size: "0.01000000" },
    {
      id: "KGS",
      name: "Kyrgyzstani Som",
      min_size: "0.01000000",
    },
    { id: "KHR", name: "Cambodian Riel", min_size: "0.01000000" },
    {
      id: "KMF",
      name: "Comorian Franc",
      min_size: "1.00000000",
    },
    { id: "KRW", name: "South Korean Won", min_size: "1.00000000" },
    {
      id: "KWD",
      name: "Kuwaiti Dinar",
      min_size: "0.00100000",
    },
    { id: "KYD", name: "Cayman Islands Dollar", min_size: "0.01000000" },
    {
      id: "KZT",
      name: "Kazakhstani Tenge",
      min_size: "0.01000000",
    },
    { id: "LAK", name: "Lao Kip", min_size: "0.01000000" },
    {
      id: "LBP",
      name: "Lebanese Pound",
      min_size: "0.01000000",
    },
    { id: "LKR", name: "Sri Lankan Rupee", min_size: "0.01000000" },
    {
      id: "LRD",
      name: "Liberian Dollar",
      min_size: "0.01000000",
    },
    { id: "LSL", name: "Lesotho Loti", min_size: "0.01000000" },
    {
      id: "LTL",
      name: "Lithuanian Litas",
      min_size: "0.01000000",
    },
    { id: "LYD", name: "Libyan Dinar", min_size: "0.00100000" },
    {
      id: "MAD",
      name: "Moroccan Dirham",
      min_size: "0.01000000",
    },
    { id: "MDL", name: "Moldovan Leu", min_size: "0.01000000" },
    {
      id: "MGA",
      name: "Malagasy Ariary",
      min_size: "0.20000000",
    },
    { id: "MKD", name: "Macedonian Denar", min_size: "0.01000000" },
    {
      id: "MMK",
      name: "Myanmar Kyat",
      min_size: "0.01000000",
    },
    { id: "MNT", name: "Mongolian Tögrög", min_size: "0.01000000" },
    {
      id: "MOP",
      name: "Macanese Pataca",
      min_size: "0.01000000",
    },
    { id: "MUR", name: "Mauritian Rupee", min_size: "0.01000000" },
    {
      id: "MVR",
      name: "Maldivian Rufiyaa",
      min_size: "0.01000000",
    },
    { id: "MWK", name: "Malawian Kwacha", min_size: "0.01000000" },
    {
      id: "MXN",
      name: "Mexican Peso",
      min_size: "0.01000000",
    },
    { id: "MYR", name: "Malaysian Ringgit", min_size: "0.01000000" },
    {
      id: "MZN",
      name: "Mozambican Metical",
      min_size: "0.01000000",
    },
    { id: "NAD", name: "Namibian Dollar", min_size: "0.01000000" },
    {
      id: "NGN",
      name: "Nigerian Naira",
      min_size: "0.01000000",
    },
    { id: "NIO", name: "Nicaraguan Córdoba", min_size: "0.01000000" },
    {
      id: "NOK",
      name: "Norwegian Krone",
      min_size: "0.01000000",
    },
    { id: "NPR", name: "Nepalese Rupee", min_size: "0.01000000" },
    {
      id: "NZD",
      name: "New Zealand Dollar",
      min_size: "0.01000000",
    },
    { id: "OMR", name: "Omani Rial", min_size: "0.00100000" },
    {
      id: "PAB",
      name: "Panamanian Balboa",
      min_size: "0.01000000",
    },
    { id: "PEN", name: "Peruvian Sol", min_size: "0.01000000" },
    {
      id: "PGK",
      name: "Papua New Guinean Kina",
      min_size: "0.01000000",
    },
    { id: "PHP", name: "Philippine Peso", min_size: "0.01000000" },
    {
      id: "PKR",
      name: "Pakistani Rupee",
      min_size: "0.01000000",
    },
    { id: "PLN", name: "Polish Złoty", min_size: "0.01000000" },
    {
      id: "PYG",
      name: "Paraguayan Guaraní",
      min_size: "1.00000000",
    },
    { id: "QAR", name: "Qatari Riyal", min_size: "0.01000000" },
    {
      id: "RON",
      name: "Romanian Leu",
      min_size: "0.01000000",
    },
    { id: "RSD", name: "Serbian Dinar", min_size: "0.01000000" },
    {
      id: "RUB",
      name: "Russian Ruble",
      min_size: "0.01000000",
    },
    { id: "RWF", name: "Rwandan Franc", min_size: "1.00000000" },
    {
      id: "SAR",
      name: "Saudi Riyal",
      min_size: "0.01000000",
    },
    { id: "SBD", name: "Solomon Islands Dollar", min_size: "0.01000000" },
    {
      id: "SCR",
      name: "Seychellois Rupee",
      min_size: "0.01000000",
    },
    { id: "SEK", name: "Swedish Krona", min_size: "0.01000000" },
    {
      id: "SGD",
      name: "Singapore Dollar",
      min_size: "0.01000000",
    },
    { id: "SHP", name: "Saint Helenian Pound", min_size: "0.01000000" },
    {
      id: "SLL",
      name: "Sierra Leonean Leone",
      min_size: "0.01000000",
    },
    { id: "SOS", name: "Somali Shilling", min_size: "0.01000000" },
    {
      id: "SRD",
      name: "Surinamese Dollar",
      min_size: "0.01000000",
    },
    { id: "SSP", name: "South Sudanese Pound", min_size: "0.01000000" },
    {
      id: "STD",
      name: "São Tomé and Príncipe Dobra",
      min_size: "0.01000000",
    },
    { id: "SVC", name: "Salvadoran Colón", min_size: "0.01000000" },
    {
      id: "SZL",
      name: "Swazi Lilangeni",
      min_size: "0.01000000",
    },
    { id: "THB", name: "Thai Baht", min_size: "0.01000000" },
    {
      id: "TJS",
      name: "Tajikistani Somoni",
      min_size: "0.01000000",
    },
    { id: "TMT", name: "Turkmenistani Manat", min_size: "0.01000000" },
    {
      id: "TND",
      name: "Tunisian Dinar",
      min_size: "0.00100000",
    },
    { id: "TOP", name: "Tongan Paanga", min_size: "0.01000000" },
    {
      id: "TRY",
      name: "Turkish Lira",
      min_size: "0.01000000",
    },
    { id: "TTD", name: "Trinidad and Tobago Dollar", min_size: "0.01000000" },
    {
      id: "TWD",
      name: "New Taiwan Dollar",
      min_size: "0.01000000",
    },
    { id: "TZS", name: "Tanzanian Shilling", min_size: "0.01000000" },
    {
      id: "UAH",
      name: "Ukrainian Hryvnia",
      min_size: "0.01000000",
    },
    { id: "UGX", name: "Ugandan Shilling", min_size: "1.00000000" },
    {
      id: "USD",
      name: "US Dollar",
      min_size: "0.01000000",
    },
    { id: "UYU", name: "Uruguayan Peso", min_size: "0.01000000" },
    {
      id: "UZS",
      name: "Uzbekistan Som",
      min_size: "0.01000000",
    },
    { id: "VEF", name: "Venezuelan Bolívar", min_size: "0.01000000" },
    {
      id: "VES",
      name: "Venezuelan Bolívar Soberano",
      min_size: "0.01000000",
    },
    { id: "VND", name: "Vietnamese Đồng", min_size: "1.00000000" },
    {
      id: "VUV",
      name: "Vanuatu Vatu",
      min_size: "1.00000000",
    },
    { id: "WST", name: "Samoan Tala", min_size: "0.01000000" },
    {
      id: "XAF",
      name: "Central African Cfa Franc",
      min_size: "1.00000000",
    },
    { id: "XAG", name: "Silver (Troy Ounce)", min_size: "1.00000000" },
    {
      id: "XAU",
      name: "Gold (Troy Ounce)",
      min_size: "1.00000000",
    },
    { id: "XCD", name: "East Caribbean Dollar", min_size: "0.01000000" },
    {
      id: "XDR",
      name: "Special Drawing Rights",
      min_size: "1.00000000",
    },
    { id: "XOF", name: "West African Cfa Franc", min_size: "1.00000000" },
    {
      id: "XPD",
      name: "Palladium",
      min_size: "1.00000000",
    },
    { id: "XPF", name: "Cfp Franc", min_size: "1.00000000" },
    {
      id: "XPT",
      name: "Platinum",
      min_size: "1.00000000",
    },
    {
      id: "XTS",
      name: "Codes specifically reserved for testing purposes",
      min_size: "1.00000000",
    },
    { id: "YER", name: "Yemeni Rial", min_size: "0.01000000" },
    {
      id: "ZAR",
      name: "South African Rand",
      min_size: "0.01000000",
    },
    { id: "ZMW", name: "Zambian Kwacha", min_size: "0.01000000" },
    {
      id: "ZWD",
      name: "Zimbabwean Dollar",
      min_size: "0.01000000",
    },
    { id: "ZWL", name: "Zimbabwean Dollar", min_size: "0.01000000" },
  ],
};

// console.log(bigdata.data);

for (let i = 0; i < bigdata.data.lenght; i++) {
  //   console.log(i);
  console.log(bigata.data[i]);
}

console.log("veikia");
