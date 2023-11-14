"use stirct";

//get html elements
const locationList = document.querySelector("#locationList");
const parkTypeList = document.querySelector("#parkTypeList");
const searchButton = document.querySelector("#searchButton");
//const nationalParksTable = document.querySelector("#nationalParksTable");
const nationalParksTableBody = document.querySelector("#nationalParksTableBody");
//create functions to handle events
function loadLocationList() {
  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.textContent = location;
    option.value = location;
    locationList.appendChild(option);
  }
}

function loadParkTypeList() {
  for (const park of parkTypesArray) {
    let option = document.createElement("option");
    option.textContent = park;
    option.value = park;
    parkTypeList.appendChild(option);
  }
}

function loadParksByLocation() {
  let parksByLocation = [];
  let location = locationList.value;
  for (const nationalPark of nationalParksArray) {
    if (nationalPark.State == location) {
      parksByLocation.push(nationalPark.LocationName);
    }
  }
  console.log(parksByLocation);
  return parksByLocation;
}

function loadParksTable(nationalParks) {
  for (const nationalPark of nationalParks) {
    buildParkRow(nationalPark);
  }
}

function buildParkRow(nationalPark) {
  let row = nationalParksTableBody.insertRow();
  let cell1 = row.insertCell();
  cell1.innerText = nationalPark.LocationID;

  let cell2 = row.insertCell();
  cell1.innerText = nationalPark.LocationName;

  let cell3 = row.insertCell();
  cell1.innerText = nationalPark.Address;

  let cell4 = row.insertCell();
  cell1.innerText = nationalPark.City;
  let cell5 = row.insertCell();
  cell1.innerText = nationalPark.State;
  let cell6 = row.insertCell();
  cell1.innerText = nationalPark.ZipCode;
  let cell7 = row.insertCell();
  cell1.innerText = nationalPark.Phone;
  let cell8 = row.insertCell();
  cell1.innerText = nationalPark.Fax;
}
function searchByLocation() {
  let parks = loadParksByLocation();
  loadParksTable(parks);
}

//wire up functions to events

window.onload = function () {
  loadParkTypeList();
  loadLocationList();
  buildParkRow();
  //loadParksTable();
  searchButton.onclick = searchByLocation;
};
