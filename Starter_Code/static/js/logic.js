// Define the map
var myMap = L.map("map", {
    center: [0, 0],
    zoom: 2,
  });
  
  // Add the base tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);
  
  // Define the earthquake data URL
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";
  
  // Function to determine marker size based on earthquake magnitude
  function markerSize(magnitude) {
    return magnitude * 5;
  }
  
  // Function to determine marker color based on earthquake depth
  function markerColor(depth) {
    if (depth > 90) {
      return "#FF0000"; // Red for deep earthquakes
    } else if (depth > 70) {
      return "#FFA500"; // Orange for moderately deep earthquakes
    } else if (depth > 50) {
      return "#FFFF00"; // Yellow for intermediate depth earthquakes
    } else {
      return "#00FF00"; // Green for shallow earthquakes
    }
  }
  
  // Fetch the earthquake data
  d3.json(url).then(function (data) {
    // Create a GeoJSON layer with the retrieved data
    L.geoJson(data.features, {
      pointToLayer: function (feature, latlng) {
        // Create a circle marker for each earthquake
        return L.circleMarker(latlng, {
          radius: markerSize(feature.properties.mag),
          fillColor: markerColor(feature.geometry.coordinates[2]),
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        }).bindPopup(`<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]}</p>`);
      },
    }).addTo(myMap);
  
    // Create a legend
    var legend = L.control({ position: "bottomright" });
  
    legend.onAdd = function (map) {
      var div = L.DomUtil.create("div", "info legend");
      var depths = [-10, 10, 30, 50, 70, 90];
      var colors = ["#00FF00", "#FFFF00", "#FFA500", "#FF0000"];
  
      div.innerHTML += "<h4>Earthquake Depth</h4>";
  
      for (var i = 0; i < depths.length; i++) {
        div.innerHTML +=
          '<i style="background:' +
          markerColor(depths[i] + 1) +
          '"></i> ' +
          depths[i] +
          (depths[i + 1] ? "&ndash;" + depths[i + 1] + "<br>" : "+");
      }
  
      return div;
    };
  
    // Add legend to the map
    legend.addTo(myMap);
  });
  