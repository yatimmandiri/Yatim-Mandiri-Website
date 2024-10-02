"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import L from 'react-leaflet';

const citiesData = [
  { name: 'Sumatra Utara', coords: [3.5952, 98.6722], donations: 6326 },
  { name: 'Riau', coords: [0.2933, 101.7068], donations: 12465 },
  { name: 'Kepulauan Riau', coords: [1.058, 104.0305], donations: 3707 },
  { name: 'Kalimantan Barat', coords: [0.0292, 109.3412], donations: 4982 },
  { name: 'Kalimantan Timur', coords: [-0.5022, 117.1536], donations: 13317 },
  { name: 'Lampung', coords: [-5.4500, 105.2667], donations: 4195 },
  { name: 'Jakarta', coords: [-6.2088, 106.8456], donations: 17870 },
  { name: 'Jawa Barat', coords: [-6.9039, 107.6186], donations: 950 },
  { name: 'Banten', coords: [-6.445, 106.0015], donations: 5931 },
  { name: 'Jawa Tengah', coords: [-7.1509, 110.1403], donations: 13609 },
  { name: 'DI Yogyakarta', coords: [-7.7972, 110.3688], donations: 778 },
  { name: 'Jawa Timur', coords: [-7.536, 112.2384], donations: 11061 },
  { name: 'Bali', coords: [-8.3405, 115.092], donations: 16014 },
];

const MapComponent = () => {
  return (
    <MapContainer center={[-2.5489, 118.0149]} zoom={5} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {citiesData.map((city, index) => (
        <Marker
          key={index}
          position={city.coords}
          icon={L.divIcon({
            className: 'custom-icon',
            html: `<div style="background-color: orange; color: white; padding: 5px; border-radius: 5px;">
                     <strong>${city.donations}</strong><br/>${city.name}
                   </div>`,
          })}
        >
          <Popup>
            {city.name}: {city.donations} Donations
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
