var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var prs = document.querySelector('.prs');
var dt = document.querySelector('.date');
var hum = document.querySelector('.hum');
var rs = document.querySelector('.rise');
var st = document.querySelector('.set');
var tmpMin = document.querySelector('.tmpMin');
var tmpMax = document.querySelector('.tmpMax');
var feelLike = document.querySelector('.feels');
var button= document.querySelector('.submit');

function showPosition() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
                console.log(positionInfo);});
    }
    else {
      alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}

showPosition();
input.value = 'Dhaka';

const searchbox = document.querySelector('.input_text');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    mainfunc(searchbox.value);
  }
}

mainfunc(searchbox.value);

button.addEventListener('click', mainfunc);

function mainfunc (query){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=4c8f06a1fed346d479aa259c854bde73&units=metric')

.then(response => response.json())
.then(data => {

  var tempValue = Math.round(data['main']['temp']);
  var feelValue = Math.round(data['main']['feels_like']);
  var mintempValue = Math.round(data['main']['temp_min']);
  var maxtempValue = Math.round(data['main']['temp_max']);
  var humValue = data['main']['humidity'];
  var prsValue = data['main']['pressure'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['main'];
  var dateValue = data['dt'];
  lon = data['coord']['lon'];
  lat = data['coord']['lat'];

 
  let now = new Date();
  let date = document.querySelector('.card .date');
  date.innerText = dateBuilder(now);
    function dateBuilder (d) {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
 
  let unix_timestampRS = data['sys']['sunrise'];
  var dates = new Date(unix_timestampRS * 1000);
  var hours = dates.getHours();
  var minutes = "0" + dates.getMinutes();
  var formattedTimeRS = hours + ':' + minutes.substr(-2);


  let unix_timestampST = data['sys']['sunset'];
  var dates = new Date(unix_timestampST * 1000);
  var hours = dates.getHours();
  var minutes = "0" + dates.getMinutes();
  var formattedTimeST = hours + ':' + minutes.substr(-2);


//for main page
  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  tmpMax.innerHTML = "Max "+maxtempValue+ '&#8451;'+" | "+"Min "+mintempValue+ '&#8451;';;
  feelLike.innerHTML = "Feels like "+feelValue+ '&#8451;';
  hum.innerHTML = "Humidity "+humValue+'%';
  prs.innerHTML = "Pressure "+prsValue+' Pa';
  temp.innerHTML = +tempValue+ '&#8451;';
  rs.innerHTML = "Sunrise "+formattedTimeRS+" | "+"Sunset "+formattedTimeST;
  input.value = '';
  })
.catch(err => alert("Wrong city name!"));

}

function openLogin() {
  var x = document.getElementById("signIN");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("signUP");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
  }
}