/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const outputDivResult = document.getElementById("output");

fetch("./cars.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].brand);
      console.log(data[i].models);
      const autoDiv = document.createElement("div");
      autoDiv.style.border = "2px solid black";
      autoDiv.style.backgroundColor = "#e3cdb3";
      autoDiv.classList.add("auto-div");
      outputDivResult.append(autoDiv);

      const brandBrand = document.createElement("p");
      brandBrand.style.border = "2px solid black";
      brandBrand.style.fontWeight = "bold";
      brandBrand.style.fontSize = "35px";
      brandBrand.style.backgroundColor = "grey";
      brandBrand.classList.add("brandBrand");
      brandBrand.innerText = "Brand: " + data[i].brand;
      autoDiv.append(brandBrand);

      const modelsModels = document.createElement("p");
      modelsModels.classList.add("models-models");
      modelsModels.innerText = "Models: " + data[i].models.join(", ");
      autoDiv.append(modelsModels);
    }
  });
