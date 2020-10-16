import axios from 'axios';
import dotenv from 'dotenv';
import { UI } from '../ui/ui';

dotenv.config();
// Used to grab value of user inputs for use in the http request

const ui = new UI();

console.log('Instantiating UI in ipify.js', ui);

export const ipSearch = async () => {
  const apiURL = 'https://geo.ipify.org/api/v1';
  const key = `apiKey=${ process.env.IPIFY_API_KEY }`;
  const ip = '8.8.8.8';
  try {
    const response = await axios.get(`${apiURL}${key}&domain=${ip}`);
    console.log(response);
  } catch (error) {
    console.error('Some bad shit happened');
  }
};

