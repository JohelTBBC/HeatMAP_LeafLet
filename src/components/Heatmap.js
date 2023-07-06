import React, { useEffect } from 'react';
import { MapContainer, TileLayer, HeatLayer } from 'react-leaflet';

// const Heatmap = () => {
//   useEffect(() => {
//     // Datos de ejemplo para el mapa de calor
//     const heatData = [
//       [51.505, -0.09, 0.2],
//       [51.51, -0.1, 0.5],
//       [51.51, -0.12, 0.6],
//       // Agrega más puntos de datos aquí
//     ];

//     // Configuración del mapa de calor
//     const heatOptions = {
//       radius: 20,
//       blur: 10,
//     };

//     // Código para inicializar el mapa de Leaflet
//     const map = L.map('map').setView([51.505, -0.09], 13);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//     }).addTo(map);

//     // Código para agregar la capa de mapa de calor
//     L.heatLayer(heatData, heatOptions).addTo(map);
//   }, []);

//   return <div id="map" style={{ height: '500px' }} />;
// };

// export default Heatmap;
