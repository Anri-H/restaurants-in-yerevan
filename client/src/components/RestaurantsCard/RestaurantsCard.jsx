import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import styles from "./restaurantsCard.module.css";

export default function RestaurantsCard({ restaurant }) {
  const { _id, name, description, rating } = restaurant;

  return (
    <div key={_id} className={styles.card}>
      <h3>{name}</h3>
      <Rating ratingValue={rating} />
      <p className={styles.description}>{description}</p>
      <Link to={`/${_id}`} className={styles.link}>
        View Restaurant
      </Link>
    </div>
  );
}
