function updateMap() {
  //Before Fetch API was introduced, XMl\\HTTP request was fired for fetching data without reloading the page
  // Fetch API is introduced in modern javaScript to fetch data form a particular data feed.If a URL is passed in fetch, it returns a promise.
  fetch("./data.json")
    .then((response) => response.json())
    .then((info) => {
      console.log(info.data);
      info.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;
        cases = element.infected;
        if(cases>255){
            color = "rgb(255, 0, 0)"
        }
        else{
            color = `rgb(${color}, 0, 0)`
        }

        //Mark on the map
        new mapboxgl.Marker({
          draggable: false,
          color: color
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
let interval = 20000;
setInterval(updateMap, interval);
