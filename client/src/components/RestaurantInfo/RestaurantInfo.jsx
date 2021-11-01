import React from "react";
import { Rating } from "react-simple-star-rating";
import Comment from "../Comment/Comment";
import styles from "./restaurantInfo.module.css";

export default function RestaurantInfo({ restaurant }) {
  const { _id, name, description, rating, image, geometry, comments } =
    restaurant;

  return (
    <div key={_id} className={styles.main}>
      <div className={styles.info}>
        <img src={image} width="50%" alt={name} />
        <div>
          <h2 className={styles.title}>{name}</h2>
          <Rating ratingValue={rating} />
          <p>{geometry.address}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <Comment comments={comments} id={_id} />
    </div>
  );
}
