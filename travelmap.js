//40.7128° N, 74.0060° W
var coordinates =[40.7128,-74.0060];

let map= L.map("map", {
  center: coordinates,
 zoom: 10 
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
