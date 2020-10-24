const map = L.map('mapid').setView([-23.6486656, -46.5656102], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia3VyYWdlc2hpbWFkYSIsImEiOiJja2dmZHV6cTQwbXExMnFyc3hneTY1bzZqIn0.DSfi_5lR975W7uCOOdkdrw'
}).addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



function addMarker({id,name,lat,lng}){

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"></a>`)
    
    L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(element => {
    const orphanage = {
        id: element.dataset.id,
        name: element.dataset.name,
        lat: element.dataset.lat,
        lng: element.dataset.lng,
    }

    addMarker(orphanage)
})