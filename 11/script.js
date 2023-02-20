const ENDPOINT = "./skills.json";

const outputTableResult = document.getElementById("skills-wrapper");

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id);
      console.log(data[i].skill);

      const tableDiv = document.createElement("tr");
      tableDiv.style.border = "5px solid black";
      tableDiv.style.backgroundColor = "white";
      tableDiv.style.borderCollapse = "collapse";
      tableDiv.classList.add("table-div");
      outputTableResult.append(tableDiv);

      const idDiv = document.createElement("td");
      idDiv.style.border = "5px solid black";
      idDiv.style.fontWeight = "bold";
      idDiv.style.fontSize = "15px";
      idDiv.style.backgroundColor = "lightblue";
      idDiv.style.borderCollapse = "collapse";
      idDiv.classList.add("id-div");
      idDiv.innerText = data[i].id;
      tableDiv.append(idDiv);

      const skillDiv = document.createElement("td");
      skillDiv.classList.add("skill-div");
      skillDiv.style.borderCollapse = "collapse";
      skillDiv.innerText = data[i].skill;
      tableDiv.append(skillDiv);

      const actionDiv = document.createElement("td");
      actionDiv.classList.add("action-div");
      actionDiv.style.borderCollapse = "collapse";
      actionDiv.innerText = "Delete";
      tableDiv.append(actionDiv);
    }
  });

document.getElementById("add-skill-button").addEventListener("click", () => {
  window.location.href = "./add.html";
});
