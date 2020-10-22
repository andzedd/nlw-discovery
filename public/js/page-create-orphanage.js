const map = L.map('mapid').setView([-23.6486656, -46.5656102], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia3VyYWdlc2hpbWFkYSIsImEiOiJja2dmZHV6cTQwbXExMnFyc3hneTY1bzZqIn0.DSfi_5lR975W7uCOOdkdrw'
}).addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//create and add marker
map.on('click', (e) => {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
})