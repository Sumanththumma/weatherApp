const API_KEY = "b703eca2a1424a449f790654242612";
const date = new Date();
const timeanddate = document.getElementById('timeanddate');
const locationData = document.getElementById('location');
const tempStats = document.getElementById('stats');

const hoursandminutes = () =>{
    let minutes =  date.getMinutes();
    let hours = date.getHours();
    hours = hours > 12? hours-12 : hours;
    hours = hours < 10? "0"+hours: hours;
    minutes = minutes < 10? "0"+minutes: minutes;
    let time = hours +":"+ minutes;
    return time;
}

const ampm = () => {
    let hours = date.getHours();
    if(hours < 12){
        return " AM"
    }
    else{
        return " PM"
    }
}

const day = () =>{
    const dayarr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    return dayarr[date.getDay()];
}
const tareekh = () =>{
    let montharr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    month = montharr[date.getMonth()]
    return date.getDate() +" "+ month;
}


setInterval(() => {
    timeanddate.innerHTML = `<div id="time" class="font-semibold text-xl">${hoursandminutes()}<span id="ampm">${ampm()}</span>
                <div class="text-sm font-normal" id="day">${day()}, ${tareekh()}</div>
            </div>`
}, 1000);

const data = fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Hyderabad&aqi=yes`)
.then(response => response.json()) // Convert the response to JSON
.then(data => {
  console.log(data); // Use the JSON data
  locationData.innerHTML = `<div id="city"><i class="fa-sharp-duotone fa-solid fa-location-pin"></i> ${data.location.name}</div>
                        <div id="country">${data.location.country}</div>`

  tempStats.innerHTML =  `<div id="temperature-box" class="flex flex-col">
                            <h1 class="font-bold text-3xl text-start" id="temp">${data.current.heatindex_c} &deg;C</h1>
                            <p id="feelslike" class="text-sm text-start">feels like ${data.current.feelslike_c}&deg;C</p>
                        </div>
                            <div id="icon-box">
                            <img src="${data.current.condition.icon}" alt="" class="object-cover w-full h-full px-3">
                        </div>`                      

})
.catch(error => console.error('Error:', error));