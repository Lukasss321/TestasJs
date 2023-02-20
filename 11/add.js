const ENDPOINT = "./skills.json";

async function sendData() {
  const Skill = document.getElementById("added-skill").value;

  const dataToSend = {
    skill: Skill,
  };
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  const result = await response.json();
  console.log(result);
}

document.getElementById("view-skills").addEventListener("click", () => {
  window.location.href = "./index.html";
});

document.getElementById("submit-skill").addEventListener("click", sendData);
