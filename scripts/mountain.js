"use strict";

const mountainSelect = document.querySelector("#mountainSelect");
const mountainTableBody = document.querySelector("#mountainTableBody");
const mountainDesc = document.querySelector("#mountainDesc");

function mountainsList() {
  let option = new Option();
  mountainSelect.appendChild(option);

  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.innerText = mountain.name;
    mountainSelect.appendChild(option);
  }
}
mountainsList();

function mountainInfo() {
  mountainDesc.innerHTML = "";
  console.log(mountainSelect.value);
  for (const mountain of mountainsArray) {
    if (mountain.name == mountainSelect.value) {
      let p = document.createElement("p");
      p.innerText = mountain.desc;
      mountainDesc.appendChild(p);
      console.log(p);

      let img = document.createElement("img");
      img.src = "images/" + mountain.img;
      mountainDesc.appendChild(img);
    }
  }
}
mountainSelect.addEventListener("change", function () {
  mountainInfo();
});

window.onload = function () {
  mountainsList();
};
