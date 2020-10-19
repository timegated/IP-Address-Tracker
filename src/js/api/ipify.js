import axios from 'axios';
import { UI } from '../ui/ui';


// Used to grab value of user inputs for use in the http request

const ui = new UI();

export const ipSearch = async (e) => {
  e.preventDefault()
  const apiURL = 'https://geo.ipify.org/api/v1?';
  const key = `apiKey=${process.env.IPIFY_API_KEY}`;
  const ip = ui.getSearchValue();
  try {
    const response = await axios.get(`${apiURL}${key}&domain=${ip}`);
    console.log(response);
  } catch (error) {
    console.log('Status: 500', 'Something is amiss with the request');
  }
};

