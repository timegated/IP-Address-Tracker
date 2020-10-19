import axios from 'axios';
import { UI } from '../ui/ui';


// Used to grab value of user inputs for use in the http request

const ui = new UI();
const dataValues = Array.from(ui.dataValues);
console.log(dataValues);
export const ipSearch = async (e) => {
  e.preventDefault()
  const apiURL = 'https://geo.ipify.org/api/v1?';
  const key = `apiKey=${process.env.IPIFY_API_KEY}`;
  const ip = ui.getSearchValue();
  try {
    const response = await axios.get(`${apiURL}${key}&domain=${ip}`);
    dataValues[0].textContent = response.data.ip;
    dataValues[1].textContent = response.data.location.city + ", " +  response.data.location.region + ",\n" + response.data.location.postalCode;
    dataValues[2].textContent = "UTC" + response.data.location.timezone;
    dataValues[3].textContent = response.data.isp;
  } catch (error) {
    console.log('Status: 500', 'Something is amiss with the request');
  }
};

