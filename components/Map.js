import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((place) => ({
    latitude: place.lat,
    longitude: place.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/amrfst91/ckxlze0gh2hme15qzpdcnu0vh"
      mapboxApiAccessToken={process.env.mapbox_public_key}
      onViewportChange={(viewport) => setViewport(viewport)}
      {...viewport}
    >
      {searchResults.map((place) => (
        <div key={place.long}>
          <Marker
            latitude={place.lat}
            longitude={place.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(place)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === place.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={place.lat}
              longitude={place.long}
            >
              {place.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
