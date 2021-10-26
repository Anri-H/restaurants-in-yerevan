import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import styles from "./restaurantsCard.module.css";

export default function RestaurantsCard({ restaurant }) {
  const { _id, name, description, rating } = restaurant;

  return (
    <div key={_id} className={styles.card}>
      <h2>{name}</h2>
      <Rating ratingValue={rating} />
      <p>{description}</p>
      <Link to={`/${_id}`}>View Restaurant</Link>
    </div>
  );
}
