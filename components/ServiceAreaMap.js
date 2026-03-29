'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const ServiceAreaMap = () => {
  const [isClient, setIsClient] = useState(false);
  const [L, setL] = useState(null);

  useEffect(() => {
    setIsClient(true);
    // Import Leaflet on client side
    import('leaflet').then((leaflet) => {
      // Fix for default markers in react-leaflet
      delete leaflet.Icon.Default.prototype._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
      setL(leaflet);
    });
  }, []);

  // Service area coordinates (approximate centers)
  const serviceAreas = [
    {
      name: 'Eastern Suburbs',
      lat: -33.9526,
      lng: 151.1393,
      suburbs: ['Rockdale', 'Kogarah', 'Kogarah Bay', 'Carss Park']
    },
    {
      name: 'Northern Beaches',
      lat: -33.6544,
      lng: 151.3098,
      suburbs: ['Manly', 'Dee Why', 'Narrabeen', 'Newport']
    }
  ];

  if (!isClient || !L) {
    return (
      <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-700 font-semibold">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="h-96 rounded-lg overflow-hidden">
      <MapContainer
        center={[-33.8688, 151.2093]} // Sydney CBD
        zoom={10}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {serviceAreas.map((area, index) => (
          <Marker key={index} position={[area.lat, area.lng]}>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-teal-600">{area.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Includes: {area.suburbs.join(', ')}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ServiceAreaMap;