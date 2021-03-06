import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { getRestaurants } from "../services/api";
import Map from "../components/Map/Map";
import RestaurantsCard from "../components/RestaurantsCard/RestaurantsCard";
import styles from "./home.module.css";

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
      <h1 className={styles.title}>Top Restaurants in Yerevan</h1>

      {data ? (
        <div className={styles.main}>
          <div className={styles.list}>
            {data.map((restaurant, i) => (
              <div key={i} onClick={() => setMapData(restaurant)}>
                <RestaurantsCard restaurant={restaurant} />
              </div>
            ))}
          </div>
          <Map data={mapData ? mapData : data} />
        </div>
      ) : (
        <ReactLoading
          type={"spin"}
          color={"#ffffff"}
          height={"20%"}
          width={"20%"}
          className={styles.loading}
        />
      )}
    </div>
  );
}
