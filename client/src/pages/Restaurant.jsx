import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getRestaurant } from "../services/api";

import RestaurantInfo from "../components/RestaurantInfo/RestaurantInfo";

export default function Restaurant() {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRestaurant(id).then((res) => {
      setRestaurant(res);
    });
  }, []);

  return <>{restaurant && <RestaurantInfo restaurant={restaurant} />}</>;
}
