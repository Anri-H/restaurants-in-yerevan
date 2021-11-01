import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import styles from "./restaurantsCard.module.css";

export default function RestaurantsCard({ restaurant }) {
  const { _id, name, rating, image } = restaurant;

  return (
    <div key={_id} className={styles.card}>
      <img src={image} width="100%" alt="name" />
      <div className={styles.info}>
        <h5>{name}</h5>
        <Rating ratingValue={rating} />
        <Link to={`/${_id}`} className={styles.link}>
          View Restaurant
        </Link>
      </div>
    </div>
  );
}
