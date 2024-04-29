# Earthquake Data Visualization

This project provides an interactive visualization of earthquake data using Leaflet, a JavaScript library for creating interactive maps. The map displays earthquake locations and magnitudes, providing insights into recent seismic activity around the world.

## Purpose

The purpose of this project is to visualize earthquake data collected by the United States Geological Survey (USGS) and provide a user-friendly interface to explore and understand recent seismic activity. By visualizing earthquake locations, magnitudes, and depths, users can gain insights into the distribution and intensity of earthquakes globally.

## Features

- **Interactive Map**: The map allows users to pan and zoom to explore earthquake locations.
  
- **Marker Size and Color**: Earthquake markers are sized and colored based on their magnitudes and depths, providing visual cues about the intensity and depth of each earthquake.

- **Popup Information**: Clicking on an earthquake marker displays additional information about the earthquake, including its location, magnitude, and depth.

- **Legend**: A legend is provided to explain the colors and sizes of the earthquake markers, helping users interpret the map.

## Usage

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Open the HTML File**: Open the `index.html` file in your web browser.

3. **Explore the Map**: Once the HTML file is opened, you will see an interactive map displaying earthquake data. Use the controls to zoom in/out and pan around the map. Click on earthquake markers to view detailed information about each earthquake.

## Code Explanation

- The code defines the map using Leaflet and adds a base tile layer from OpenStreetMap.
  
- It fetches earthquake data from the USGS website and creates GeoJSON layers with circle markers for each earthquake.
  
- Marker sizes and colors are determined based on earthquake magnitudes and depths.
  
- A legend is created to explain the colors and sizes of the earthquake markers.

## Note

- This visualization may take some time to load, especially if the earthquake data is large.



## References

- Introduction to ipyleaflet#. Introduction to ipyleaflet - ipyleaflet documentation. (n.d.). https://ipyleaflet.readthedocs.io/en/latest/ 

- Leaflet cheat sheet - GitHub Pages. (n.d.). https://ugoproto.github.io/ugo_r_doc/pdf/leaflet-cheat-sheet.pdf 

- Map Marker icon with HTML and CSS only. contains leaflet example. Geoapify. (2022, November 3). https://www.geoapify.com/create-custom-map-marker-icon 

- Quick start guide - leaflet - A JavaScript library for interactive maps. Leaflet. (n.d.). https://leafletjs.com/examples/quick-start/ 

- Other resourceful ideas gotten from class, tutor and other students. 
