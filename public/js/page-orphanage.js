const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-23.7163087, -46.5809802], 13);


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
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


L.marker([-23.7163087, -46.5809802], { icon }).addTo(map);


// image gallery

function selectImage(e){
    const button = e.currentTarget;
    
    // remove all active classes
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) =>{
        button.classList.remove("active");
    });

    // select clicked image
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    // update image container
    imageContainer.src = image.src;

    //add active class to clicked button
    button.classList.add("active");
}