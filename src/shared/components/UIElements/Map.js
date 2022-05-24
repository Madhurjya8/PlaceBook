import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl";

import "./Map.css";

const API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    mapboxgl.accessToken = API_KEY;
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });
    new mapboxgl.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;
