import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

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
        <div
          style={{
            width: "200px",
            position: "absolute",
            top: "-140px",
            right: "-130px",
            backgroundColor: "#333",
            padding: "10px",
            zIndex: "10",
          }}
        >
          <h1
            style={{
              position: "absolute",
              top: "-13px",
              right: "5px",
              color: "red",
            }}
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
      />
    </div>
  );
}
