import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ---------------- Leaflet icon fix ---------------- */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});

/* ---------------- Area Coordinates ---------------- */
const areaCoordinates = {
  Prenton: { lat: 53.374, lng: -3.020 },
  Oxton: { lat: 53.391, lng: -3.010 },
  Claughton: { lat: 53.3871, lng: -3.0095 },
  "Rock Ferry": { lat: 53.384, lng: -3.001 },
  Tranmere: { lat: 53.388, lng: -3.014 },
  "New Ferry": { lat: 53.386, lng: -3.001 },
  Woodside: { lat: 53.397, lng: -3.013 },
  Seacombe: { lat: 53.425, lng: -3.057 },
  Egerton: { lat: 53.394, lng: -3.020 },
  Bidston: { lat: 53.414, lng: -3.053 },
  "Bidston Hill": { lat: 53.421, lng: -3.066 },
  Liscard: { lat: 53.426, lng: -3.041 }
};

/* ---------------- FlyTo helper ---------------- */
function FlyToArea({ position }) {
  const map = useMap();

  if (position) {
    map.flyTo(position, 12, { duration: 1.2 });
  }

  return null;
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function LiverpoolMapSection() {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-slate-50 relative z-0">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1525]">
            My Service Coverage Map
          </h2>
          <p className="text-lg text-[#334155]">
          I provide mobile vehicle assistance across Merseyside
          </p>
        </div>

        {/* Map Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-4 md:p-8 shadow-2xl border border-slate-200">

            {/* MAP (SCROLL SAFE) */}
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden z-0">
              <MapContainer
                center={[53.4084, -2.9916]}   // Liverpool
                zoom={10}
                scrollWheelZoom={false}      // 
                className="w-full h-full relative z-0"
              >
                <TileLayer
                  attribution="© OpenStreetMap"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FlyToArea
                  position={
                    selectedArea
                      ? [
                          areaCoordinates[selectedArea].lat,
                          areaCoordinates[selectedArea].lng
                        ]
                      : null
                  }
                />

                {Object.entries(areaCoordinates).map(([area, coords]) => (
                  <Marker
                    key={area}
                    position={[coords.lat, coords.lng]}
                    eventHandlers={{
                      click: () => setSelectedArea(area)
                    }}
                  >
                    <Popup>
                      <strong>{area}</strong>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Area List */}
            <div className="mt-10 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-[#0D1525] mb-6 text-center">
                All Service Areas
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {Object.keys(areaCoordinates)
                  .sort()
                  .map((area) => (
                    <div
                      key={area}
                      onClick={() => setSelectedArea(area)}
                      className={`cursor-pointer border rounded-lg px-3 py-2 text-center text-sm font-medium transition ${
                        selectedArea === area
                          ? "border-[#43AA8B] bg-[#43AA8B]/10 text-[#43AA8B]"
                          : "border-slate-200 text-[#334155] hover:border-[#43AA8B]/50"
                      }`}
                    >
                      {area}
                    </div>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
