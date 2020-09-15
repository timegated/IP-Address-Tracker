const apiKey = 'at_jV69a6mZ1tpGAStRl8hAnhEU8BBlm'; 
const ipAddress = '8.8.8.8'; // Search term
const domain = 'wordpress.org'; // Search term

fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${domain}`)
  .then(response => response.json())
  .then(json => console.log(JSON.stringify(json)));