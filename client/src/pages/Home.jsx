import React, { useState, useEffect } from "react";
import { getRestaurants } from "../services/api";
import Map from "../components/Map/Map";
import RestaurantsCard from "../components/RestaurantsCard/RestaurantsCard";

export default function Home() {
  const [data, setData] = useState(null);
  const [mapData, setMapData] = useState(data);

  useEffect(() => {
    getRestaurants().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {data && (
        <>
          {data.map((restaurant, i) => (
            <div key={i} onClick={() => setMapData(restaurant)}>
              <RestaurantsCard restaurant={restaurant} />
            </div>
          ))}
          <Map data={mapData ? mapData : data} />
        </>
      )}
    </div>
  );
}
