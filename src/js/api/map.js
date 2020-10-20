import L from 'leaflet';


export const createMap = (element, map, lat, lng) => {
    element.innerHTML = '<div class="map" id="mapId"></div>'
    map = new L.map('mapId').setView([lat, lng], 13);
    new L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      noWrap: true,
    }).addTo(map);

    new L.marker([lat, lng]).addTo(map);  
    map.panTo(new L.LatLng(lat, lng));
};

