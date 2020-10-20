import axios from 'axios';
import { UI } from '../ui/ui';
import { createMap } from './map';
// Used to grab value of user inputs for use in the http request

export const ipSearch = async () => {
  const ui = new UI();
  let map = ui.mapContainer;
  let ipmap = ui.ipMap;
  const apiURL = 'https://geo.ipify.org/api/v1?';
  const key = `apiKey=${process.env.IPIFY_API_KEY}`;
  const inputValue = ui.getSearchValue();

  try {
    const res = await axios.get(`${apiURL}${key}&domain=${inputValue}`);

    const { lat, lng, city, region, postalCode, timezone } = res.data.location;
    const { ip, isp } = res.data;

    ui.displayData(ip, city, region, postalCode, timezone, isp)

    createMap(ipmap, map, lat, lng);

  } catch (error) {
    console.error(error.message);
  }
};

