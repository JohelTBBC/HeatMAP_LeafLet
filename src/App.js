import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { useEffect, useState } from 'react';

function App() {
  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    fetch('/ListaViolencia.json')
      .then(response => response.json())
      .then(data => setUbicaciones(data))
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }, []);
  const iconVFamimiar = new L.icon({ 
    iconUrl: "/explotar.png",
    iconSize: [25, 25]  
  });
  const iconVGenero = new L.icon({
    iconUrl: "/hombre.png",
    iconSize: [60, 60]
  });
  const iconVSexual = new L.icon({
    iconUrl: "/no-violencia.png",
    iconSize: [60, 60]
  });

  return (

    <MapContainer center= {[2.43823,-76.61316]} zoom ={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />


      {ubicaciones.map((ubicacion) => (
        <Marker
          key={ubicacion.id} 
          position={[ubicacion.latitud, ubicacion.longitud]}
          icon={ubicacion.tipo === "violencia sexual" ? iconVSexual : ubicacion.tipo === "Violencia intrafamiliar" ? iconVFamimiar : iconVGenero}
          >
          <Popup>
            <h2>{ubicacion.nombre}</h2>
            <p>{ubicacion.descripcion}</p>
          </Popup>

          </Marker> 
                
          ))}
    </MapContainer>
    
  );
}

export default App;
