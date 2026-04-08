import React, { useState, useEffect, useRef } from "react";

const areaCoordinates = {
    "Doncaster City Centre": { lat: 53.5228, lng: -1.1285 },
    Bessacarr: { lat: 53.5034, lng: -1.0918 },
    Balby: { lat: 53.5068, lng: -1.1576 },
    "Wheatley Hills": { lat: 53.5327, lng: -1.1042 },
    Armthorpe: { lat: 53.5355, lng: -1.0536 },
    Mexborough: { lat: 53.4932, lng: -1.2892 },
    "Adwick le Street": { lat: 53.5710, lng: -1.1845 },
    Scawthorpe: { lat: 53.5474, lng: -1.1512 },
    Intake: { lat: 53.5156, lng: -1.0905 },
    Rossington: { lat: 53.4720, lng: -1.0635 },
    Bentley: { lat: 53.5530, lng: -1.1443 },
    Edenthorpe: { lat: 53.5518, lng: -1.0708 },
    Hatfield: { lat: 53.5790, lng: -1.0008 },
    Stainforth: { lat: 53.5976, lng: -1.0215 },
    Conisbrough: { lat: 53.4817, lng: -1.2320 }
};

// ✅ NO top-level leaflet imports — everything loaded dynamically inside useEffect
export default function DoncasterMapSection() {
    const [selectedArea, setSelectedArea] = useState(null);
    const [isClient, setIsClient] = useState(false);
    const mapRef = useRef(null);

    useEffect(() => {
        setIsClient(true); // ✅ Only true in real browser, never during react-snap

        let mapInstance = null;

        async function initMap() {
            // ✅ Dynamically import leaflet ONLY after confirming we're in a browser
            const L = (await import("leaflet")).default;
            await import("leaflet/dist/leaflet.css");

            if (mapRef.current && !mapRef.current._leaflet_id) {
                // Fix default icon
                delete L.Icon.Default.prototype._getIconUrl;
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
                    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
                });

                mapInstance = L.map(mapRef.current);

                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: "© OpenStreetMap"
                }).addTo(mapInstance);

                const bounds = L.latLngBounds(
                    Object.values(areaCoordinates).map((c) => [c.lat, c.lng])
                );

                Object.entries(areaCoordinates).forEach(([area, coords]) => {
                    L.marker([coords.lat, coords.lng])
                        .addTo(mapInstance)
                        .bindPopup(`<strong>${area}</strong>`)
                        .on("click", () => setSelectedArea(area));
                });

                mapInstance.fitBounds(bounds, { padding: [50, 50] });
            }
        }

        initMap();

        return () => {
            if (mapInstance) mapInstance.remove();
        };
    }, []);

    return (
        <section className="py-16 md:py-24 bg-black relative">
            <div className="container mx-auto px-4">

                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Doncaster Service Coverage Map
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl">

                        {/* ✅ Plain div — leaflet mounts into this directly */}
                        <div
                            ref={mapRef}
                            className="w-full rounded-2xl overflow-hidden"
                            style={{ height: "500px" }}
                        />

                        <div className="mt-10">
                            <h3 className="text-xl font-bold text-center text-[#0D1525] mb-6">
                                Areas We Cover
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                {Object.keys(areaCoordinates).sort().map((area) => (
                                    <div
                                        key={area}
                                        onClick={() => setSelectedArea(area)}
                                        className={`cursor-pointer rounded-xl px-3 py-2 text-center font-medium transition-all duration-300 transform hover:scale-105 ${
                                            selectedArea === area
                                                ? "bg-[#656565] text-white shadow-lg"
                                                : "bg-[#656565] text-white hover:bg-[#656565]/70"
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