/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const showUsersEl = document.getElementById("btn");
const resultsEL = document.getElementById("output");
const outputBody = document.getElementsByClassName("output-container");
const GreetTag = document.getElementById("message");

function getDataFromApi() {
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => filterData(data))
    .catch((error) => {
      console.error(error);
    });
}

function filterData(data) {
  data.forEach((item) => {
    console.log(item);

    let card = document.createElement("div");
    card.style.padding = "20px";
    card.style.backgroundColor = "green";
    card.style.color = "black";
    card.style.fontWeight = "bold";
    card.style.fontSize = "35px";
    card.style.border = "5px solid black";

    let title = document.createElement("div");
    title.style.textAlign = "center";
    title.innerHTML = item.login;

    let title1 = document.createElement("img");
    title1.style.width = "20%";
    title1.style.height = "50%";
    title1.style.textAlign = "center";
    title1.style.alignItems = "center";
    title1.src = item.avatar_url;

    GreetTag.innerHTML = "   ";

    title.appendChild(title1);
    card.appendChild(title);
    resultsEL.appendChild(card);
  });
}

showUsersEl.addEventListener("click", getDataFromApi);
