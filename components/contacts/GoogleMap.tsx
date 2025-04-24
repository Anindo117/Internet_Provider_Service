"use client";

import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const position = { lat: 40.7058253, lng: -74.1180862 };

      if (mapRef.current) {
        const map = new Map(mapRef.current, {
          center: position,
          zoom: 11,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#242f3e" }],
            },
            // Add more styles as needed
          ],
        });

        new google.maps.Marker({
          position,
          map,
          title: "Our Location",
        });
      }
    };

    initMap();
  }, []);

  return <div ref={mapRef} className="w-full h-[450px]" />;
}
