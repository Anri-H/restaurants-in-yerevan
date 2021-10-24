import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import mapStyles from "./mapStyles";
import RestaurantPopup from "../RestaurantPopup/RestaurantPopup";

export default function Map({ data }) {
  const [coords, setCoords] = useState(null);
  useEffect(() => {
    data.length
      ? navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
          }
        )
      : setCoords({
          lat: data.geometry.lat,
          lng: data.geometry.lng,
        });
  }, [data]);

  return (
    <div>
      <h2>Map</h2>
      <div style={{ width: "600px", height: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBoM0sE_jUh6dmEoHVertNZp1jGlweyAG8",
          }}
          defaultCenter={coords}
          center={coords}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles,
          }}
        >
          {!data.length ? (
            <RestaurantPopup
              restaurant={data}
              lat={data.geometry.lat}
              lng={data.geometry.lng}
            />
          ) : (
            data.map((restaurant) => {
              return (
                <RestaurantPopup
                  restaurant={restaurant}
                  lat={restaurant.geometry.lat}
                  lng={restaurant.geometry.lng}
                />
              );
            })
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
}
