import React from "react";
import GoogleMapReact from 'google-map-react';

export default function SimpleMap(){
  const mapOptions = {
    center: {
      lat: -30.0346,
      lng: -51.2177
    },
    zoom: 7
  };

  const bounds = {
    nw: {
      lat: -27.825594,
      lng: -57.630045
    },
    se: {
      lat: -33.742943,
      lng: -49.703159
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
        options={() => ({
          restriction: {
            latLngBounds: bounds,
            strictBounds: false
          }
        })}
      >
        <AnyReactComponent
          lat={mapOptions.center.lat}
          lng={mapOptions.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
