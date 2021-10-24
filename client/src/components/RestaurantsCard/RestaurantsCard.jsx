import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

export default function RestaurantsCard({ restaurant }) {
  const { _id, name, description, rating } = restaurant;

  return (
    <div key={_id}>
      <h2>{name}</h2>
      <Rating ratingValue={rating} />
      <p>{description}</p>
      <Link to={`/${_id}`}>View Restaurant</Link>
    </div>
  );
}
