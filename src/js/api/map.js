import L from 'leaflet';

export const createMap = (map = {}) => {
  map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    noWrap: true,
  }).addTo(map);
};