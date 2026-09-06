import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useEffect } from "react";

function MapResizeHandler() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 400);
  }, [map]);

  return null;
}

export default function Map() {
  const position = [12.8422129, 80.1551188];

  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{
        height: "300px",
        width: "100%",
        borderRadius: "20px",
      }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          📍 <strong>VIT Chennai Campus</strong>
        </Popup>
      </Marker>

      <MapResizeHandler />
    </MapContainer>
  );
}

