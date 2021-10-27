import React, { useState, useEffect } from "react";
import { addComment } from "../../services/api";
import styles from "./comment.module.css";

export default function Comment({ comments, id }) {
  const [comment, setComment] = useState({ name: "", comment: "" });
  const [submit, setSubmit] = useState(false);
  const [com, setCom] = useState(comments);

  useEffect(() => {
    setSubmit(comment.name && comment.comment);
  }, [comment]);

  const handleChange = ({ target }) => {
    setComment({ ...comment, [target.name]: target.value });
  };

  const handleSubmit = () => {
    addComment(id, comment).then((res) => setCom([...com, res]));
    setComment({ name: "", comment: "" });
  };

  return (
    <div className={styles.main}>
      <h3 className={styles.title}>Comments</h3>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={comment.name}
        onChange={handleChange}
        className={styles.input}
      />
      <textarea
        name="comment"
        placeholder="Enter your comment"
        id=""
        value={comment.comment}
        cols="30"
        rows="10"
        onChange={handleChange}
        className={styles.input}
      ></textarea>
      <button
        disabled={!submit}
        className={styles.button}
        onClick={handleSubmit}
      >
        Submit
      </button>
      {com &&
        com.map(({ _id, name, comment }) => (
          <div key={_id} className={styles.comment}>
            <h3 className={styles.author}>{name}</h3>
            <p className={styles.commentText}>{comment}</p>
          </div>
        ))}
    </div>
  );
}
