//map API from mpatiler.com
var map = L.map('map').setView([23.71, 90.41],6);
L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=qa19MyLmPVjGwEI6dfnZ',{
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);
var marker = L.marker([23.71, 90.41]).addTo(map);
