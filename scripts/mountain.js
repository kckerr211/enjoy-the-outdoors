"use strict";

const mountainSelect = document.querySelector("#mountainSelect");
const mountainTableBody = document.querySelector("#mountainTableBody");
const mountainDesc = document.querySelector("#mountainDesc");
// function buildMountainTable(tbody, mountain) {
//   let row2 = tbody.insertRow(-1);

//   lec1 = row2.insertCell(0);
//   c1.innerHtml = "images/" + mountainSelect.img;

//   let c2 = row2.insertCell(1);
//   c2.innerText = mountain.name;

//   let c3 = row2.insertCell(2);
//   c3.innerText = mountain.elevation;

//   let c4 = row2.insertCell(3);
//   c4.innerText = mountain.effort;

//   let c5 = row2.insertCell(4);
//   t c5.innerText = mountain.desc;
// }

function mountainsList() {      

  let option = new Option("Select a Mountain", " ");
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

        let img = document.createElement("img")
        img.src = "images/" + mountain.img
        mountainDesc.appendChild(img)
    }
  }
}
mountainSelect.addEventListener("change", function(){
    mountainInfo()
})
// // function  loadMountainTable(name) {
// //      clearTable();
// //     const Mountain = mountainsArray.find(
// //         (mountain.index) => name == index

// //     );

// }
// function clearTable() {
//   mountainTableBody.innerHtml = " ";
// }

window.onload = function () {
  // buildMountainTable(mountainTableBody, Mountain);
  mountainsList();
  // loadMountainTable();
};
