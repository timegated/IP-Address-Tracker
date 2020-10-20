import axios from 'axios';
import { UI } from '../ui/ui';
import L from 'leaflet';

// Used to grab value of user inputs for use in the http request

const ui = new UI();
let map = ui.mapContainer;

export const ipSearch = async () => {
  const apiURL = 'https://geo.ipify.org/api/v1?';
  const key = `apiKey=${process.env.IPIFY_API_KEY}`;
  const ip = ui.getSearchValue();

  try {

    const response = await axios.get(`${apiURL}${key}&domain=${ip}`);
    ui.displayData(response.data.ip, response.data.location.city, response.data.location.city, response.data.location.postalCode, response.data.location.timezone, response.data.isp)

    map = L.map('mapId').setView([response.data.location.lat, response.data.location.lng], 13);
    L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      noWrap: true,
    }).addTo(map);

    L.marker([response.data.location.lat, response.data.location.lng]).addTo(map);

    map.panTo(new L.LatLng(response.data.location.lat, response.data.location.lng));

  } catch (error) {
    console.log('Status: 500', 'Something is amiss with the request');
  }
};

