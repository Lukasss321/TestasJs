// {
//     image: string,
//     city: string,
//     price: number,
//     description: string
// }

const ENDPOINT = "https://robust-safe-crafter.glitch.me/";

async function sendData() {
  const img = document.getElementById("img-input").value;

  const price = document.getElementById("price-input").value;

  const description = document.getElementById("description-input").value;

  const city = document.getElementById("city-input").value;

  const dataToSend = {
    image: img,
    city: city,
    price: parseInt(price),
    description: description,
  };

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
}

document
  .getElementById("add-property-button")
  .addEventListener("click", sendData);
