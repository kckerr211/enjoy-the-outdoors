"use stirct";

const locationList = document.querySelector("#locationList");
const parkTypeList = document.querySelector("#parkTypeList");

const nationalParksTableBody = document.querySelector("#nationalParksTableBody");

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
      parksByLocation.push(nationalPark);
    }
  }
  console.log(parksByLocation);
  return parksByLocation;
}

function loadParksByParkType() {
  let parksByParkType = [];
  let parkType = parkTypeList.value;
  for (const nationalPark of nationalParksArray) {
    if (nationalPark.LocationName.indexOf(parkType) != -1) {
      parksByParkType.push(nationalPark);
    }
  }
  console.log(parksByParkType);
  return parksByParkType;
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
  cell2.innerText = nationalPark.LocationName;

  let cell3 = row.insertCell();
  cell3.innerText = nationalPark.Address;

  let cell4 = row.insertCell();
  cell4.innerText = nationalPark.City;
  let cell5 = row.insertCell();
  cell5.innerText = nationalPark.State;
  let cell6 = row.insertCell();
  cell6.innerText = nationalPark.ZipCode;
  let cell7 = row.insertCell();
  cell7.innerText = nationalPark.Phone;
  let cell8 = row.insertCell();
  cell8.innerText = nationalPark.Fax;

  let cell9 = row.insertCell();
  if (nationalPark.Visit) {
    cell9.innerText = nationalPark.Visit;
  }
}

function searchByLocation() {
  let parks = loadParksByLocation();
  loadParksTable(parks);
}

function searchByParkType() {
  let parks = loadParksByParkType();
  loadParksTable(parks);
}

window.onload = function () {
  loadParkTypeList();
  loadLocationList();
};

locationList.onchange = function () {
  nationalParksTableBody.innerHTML = " ";
  searchByLocation();
};
parkTypeList.onchange = function () {
  nationalParksTableBody.innerHTML = " ";
  searchByParkType();
};
