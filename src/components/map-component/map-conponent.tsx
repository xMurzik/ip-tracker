import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

interface IMyMapComponent {
  lat: number;
  lng: number;
}

const MapComponent = ({ lat, lng }: IMyMapComponent) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], 13);
  }, [map, lat, lng]);
  return null;
};

export default MapComponent;
