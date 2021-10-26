import React from "react";
import { Rating } from "react-simple-star-rating";
import Comment from "../Comment/Comment";
import styles from "./restaurantInfo.module.css";

export default function RestaurantInfo({ restaurant }) {
  const { _id, name, description, rating, comments } = restaurant;

  return (
    <div key={_id} className={styles.main}>
      <h2 className={styles.title}>{name}</h2>
      <Rating ratingValue={rating} />
      <p className={styles.description}>{description}</p>
      <Comment comments={comments} id={_id} />
    </div>
  );
}
