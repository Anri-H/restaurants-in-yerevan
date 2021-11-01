import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ReactLoading from "react-loading";

import { getRestaurant } from "../services/api";

import RestaurantInfo from "../components/RestaurantInfo/RestaurantInfo";
import styles from "./home.module.css";

export default function Restaurant() {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRestaurant(id).then((res) => {
      setRestaurant(res);
    });
  }, [id]);

  return (
    <div>
      {restaurant ? (
        <RestaurantInfo restaurant={restaurant} />
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
