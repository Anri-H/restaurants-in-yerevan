import mongoose from "mongoose";

const CommentScheme = mongoose.Schema({
  name: String,
  comment: String,
});

const CommentModel = mongoose.model("comment", CommentScheme);

export default CommentModel;
