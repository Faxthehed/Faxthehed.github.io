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

let circleMarker = L.circle(coordinates, {
  color: "black",
  fillColor: "purple",
  fillOpacity: 0.25,
  radius: 50
}).bindPopup(`<iframe width="280" height="160" src="https://www.youtube.com/embed/e97FhyGWtmE?si=vvY_gFF5NCnj11M9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`).addTo(map);
