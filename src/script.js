const API_KEY = "b703eca2a1424a449f790654242612";
const date = new Date();
const timeanddate = document.getElementById("timeanddate");
const locationData = document.getElementById("location");
const tempStats = document.getElementById("stats");
let fetchInterval = 60000 * 10;

const hoursandminutes = (date) => {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let time = hours + ":" + minutes;
  return time;
};

const ampm = (date) => {
  let hours = date.getHours();
  if (hours < 12) {
    return " AM";
  } else {
    return " PM";
  }
};

const day = (date) => {
  const dayarr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayarr[date.getDay()];
};
const nela = (date) => {
  let montharr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  month = montharr[date.getMonth()];
  return date.getDate() + " " + month;
};

setInterval(() => {
  const currentDate = new Date();
  timeanddate.innerHTML = `<div id="time" class="font-semibold text-xl">${hoursandminutes(
    currentDate
  )}<span id="ampm">${ampm(currentDate)}</span>
                <div class="text-sm font-normal" id="day">${day(
                  currentDate
                )}, ${nela(currentDate)}</div>
            </div>`;
}, 1000);

let bgArr = ["bg-blue-400","bg-black"];


// setInterval(() => {
const data = fetch(
  `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Adilabad&aqi=yes`
)
  .then((response) => response.json())
  .then((data) => {
    locationData.innerHTML = `<div id="locationbox" class="flex flex-col">
                                <div id="city">${data.location.name}</div>
                                <div id="country">${data.location.country}</div>
                            </div>
                            <div id="iconbox">
                                <div class="object-cover">
                                    <img src="${data.current.condition.icon}" alt="">
                                </div>
                            </div>`;

    tempStats.innerHTML = `<div id="temperature-box" class="flex flex-col">
                                <h1 class="font-extrabold text-4xl text-start" id="temp">${data.current.heatindex_c} &deg;C</h1>
                                <p id="feelslike" class="text-md text-start">feels  like  ${data.current.feelslike_c}&deg;C</p>
                            </div>
                                <div id="icon-box">
                                <img src="${data.current.condition.icon}" alt="" class="object-cover w-full h-auto px-3">
                            </div>`;
  })
  .catch((error) => console.error("Error:", error));
// },6000);
