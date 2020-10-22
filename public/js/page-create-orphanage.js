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

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // clear map before adding icon
    marker && map.removeLayer(marker);

    // add icon marker
    marker = L.marker([lat,lng], { icon }).addTo(map);
});

// add and delete photos
function addPhotos(){
    const imagesContainer = document.querySelector('#images');

    const uploads = document.querySelectorAll('.new-upload');

    const cloneLastUpload = uploads[uploads.length - 1].cloneNode(true);

    if(cloneLastUpload.children[0].value != ""){
        cloneLastUpload.children[0].value = "";

        imagesContainer.appendChild(cloneLastUpload);
    }
}

function removePhoto(e){
    const deleteButton = e.currentTarget;

    const uploads = document.querySelectorAll('.new-upload').length;

    if(uploads <= 1){
        deleteButton.previousSibling.previousSibling.value = "";
        return
    }

    deleteButton.parentNode.remove();
}

function toggleSelect(e){
    const button = e.currentTarget;

    document.querySelectorAll(".button-select button").forEach(element => {
        element.classList.remove("active");
    });

    button.classList.add("active");

    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;
}