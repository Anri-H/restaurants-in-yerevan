import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { addComment } from "../../services/api";

export default function RestaurantInfo({ restaurant }) {
  const [comment, setComment] = useState({ name: "", comment: "" });
  const { _id, name, description, rating, comments } = restaurant;

  const handleChange = ({ target }) => {
    setComment({ ...comment, [target.name]: target.value });
  };

  const handleSubmit = () => {
    addComment(_id, comment);
  };

  return (
    <div key={_id}>
      <h2>{name}</h2>
      <Rating ratingValue={rating} />
      <p>{description}</p>
      <div>
        <h3>Comments</h3>
        <input type="text" name="name" onChange={handleChange} />
        <textarea
          name="comment"
          placeholder="Enter your comment"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <button onClick={handleSubmit}>Submit</button>
        {comments &&
          comments.map(({ _id, name, comment }) => (
            <div key={_id}>
              <h3>{name}</h3>
              <p>{comment}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
