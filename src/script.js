const API_KEY = "b703eca2a1424a449f790654242612";
const date = new Date();
const timeanddate = document.getElementById('timeanddate')


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

fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Hyderabad&aqi=yes`).then((response)=>{}).then((data)=>{
    console.log(data.json());
})