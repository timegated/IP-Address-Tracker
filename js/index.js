(function () {
  const apiKey = 'at_jV69a6mZ1tpGAStRl8hAnhEU8BBlm'; 
  const ipAddress = '8.8.8.8'; // Search term
  const domain = 'wordpress.org'; // Search term

  const map = L.map('mapid').setView([39.95, 75.16], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Look at this thing.<br> Easily customizable.')
  .openPopup();

  fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${domain}`)
    .then(response => response.json())
    .then(json => console.log(json));
})()