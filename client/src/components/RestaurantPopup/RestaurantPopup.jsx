import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import styles from "./restaurantPopup.module.css";

export default function RestaurantPopup({
  lat,
  lng,
  restaurant: { name, description, rating },
}) {
  const [popup, setPopup] = useState(false);
  return (
    <div
      lat={lat}
      lng={lng}
      style={{ cursor: "pointer", position: "relative" }}
    >
      {popup && (
        <div className={styles.popup}>
          <h1
            className={styles.close}
            onClick={(e) => {
              setPopup(false);
            }}
          >
            X
          </h1>
          <h2>{name}</h2>
          <p>{description}</p>
          <Rating ratingValue={rating} />
        </div>
      )}
      <img
        onClick={(e) => {
          setPopup(true);
        }}
        src="https://img.icons8.com/ios-filled/50/000000/restaurant--v1.png"
        alt="gps"
      />
    </div>
  );
}
