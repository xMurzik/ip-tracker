import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MapComponent from '../map-component/map-conponent';

interface IMapProps {
  lat: number;
  lng: number;
}

const Map: React.FC<IMapProps> = ({ lng, lat }) => {
  return (
    <MapContainer
      style={{ height: '100vh', zIndex: 0 }}
      center={[lat, lng]}
      zoom={13}
      zoomControl={false}
    >
      <MapComponent lng={lng} lat={lat} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]}></Marker>
    </MapContainer>
  );
};

export default Map;
