

const apiKey = process.env.MAPBOX_API_KEY;


  // Search Terms
  const ipAddress = "8.8.8.8";
  const domain = "wordpress.org"; 

  const customMap = L.map("mapid").setView([48.856614, 2.3522219], 13);

  L.tileLayer( "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
   {
     attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
     maxZoom: 10,
     tileSize: 512,
     id: "mapbox/streets-v8",
     zoomOffset: -1,
     accessToken: apiKey
    }
  ).addTo(customMap);
  
  
  const injectMapWithData = coords => {

    const ip = coords.ip;
    const lng = coords.lng;
    const lat = coords.lat;

    const svgIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='46' height='56'><path fill-rule='evenodd' d='M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z'/></svg>";

    const iconURL = "data:image/svg+xml;base64," + btoa(svgIcon); 

    const icon = L.icon({
      iconURL: iconURL
    });

    customMap.fitBounds([[lat, lng]]);

  }

  // L.marker([51.5, -0.09]).addTo(map)
  //   .bindPopup("Look at this thing.<br> Easily customizable.")
  // .openPopup();

  // fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${domain}`)
  //   .then(response => response.json())
  //   .then(json => console.log(json));
