import React, { useState, useEffect, useRef } from "react";

const areaCoordinates = {
    "Sheffield City Centre": { lat: 53.3811, lng: -1.4701 },
    Ecclesall: { lat: 53.3485, lng: -1.4964 },
    Crookes: { lat: 53.3894, lng: -1.5017 },
    Broomhill: { lat: 53.3881, lng: -1.4991 },
    Hillsborough: { lat: 53.4125, lng: -1.5033 },
    Sharrow: { lat: 53.3700, lng: -1.4715 },
    Heeley: { lat: 53.3560, lng: -1.4477 },
    Dore: { lat: 53.3330, lng: -1.5661 },
    Woodseats: { lat: 53.3425, lng: -1.4663 },
    Walkley: { lat: 53.3992, lng: -1.4821 },
    Burngreave: { lat: 53.4139, lng: -1.4533 },
    "Nether Edge": { lat: 53.3587, lng: -1.4746 },
    Gleadless: { lat: 53.3384, lng: -1.4183 },
    Wybourn: { lat: 53.3747, lng: -1.4366 },
    Totley: { lat: 53.3260, lng: -1.5576 },
    Beauchief: { lat: 53.3208, lng: -1.5052 }
};

export default function SheffieldMapSection() {
    const [selectedArea, setSelectedArea] = useState(null);
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (mapInstanceRef.current) return;

        async function initMap() {
            const L = (await import("leaflet")).default;
            await import("leaflet/dist/leaflet.css");

            if (!mapRef.current) return;

            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
                iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
            });

            const map = L.map(mapRef.current);
            mapInstanceRef.current = map;

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "© OpenStreetMap"
            }).addTo(map);

            const bounds = L.latLngBounds(
                Object.values(areaCoordinates).map((c) => [c.lat, c.lng])
            );

            Object.entries(areaCoordinates).forEach(([area, coords]) => {
                L.marker([coords.lat, coords.lng])
                    .addTo(map)
                    .bindPopup(`<strong>${area}</strong>`)
                    .on("click", () => setSelectedArea(area));
            });

            map.fitBounds(bounds, { padding: [50, 50] });
        }

        initMap();

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <section className="py-16 md:py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Sheffield Service Coverage Map
                    </h2>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl">
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