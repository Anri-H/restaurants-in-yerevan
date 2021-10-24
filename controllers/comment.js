import express from "express";
import mongoose from "mongoose";

import CommentModel from "../models/comment.js";
import RestaurantModel from "../models/restaurant.js";

const router = express.Router();

export const addComment = async (req, res) => {
  const { name, comment } = req.body;
  const { id } = req.params;
  const newComment = new CommentModel({
    name,
    comment,
  });
  const { _id } = await newComment.save();
  const restaurant = await RestaurantModel.findById(mongoose.Types.ObjectId(id));

  try {
    restaurant.comments.push(_id);
    await restaurant.save();

    res.json(newComment);
  } catch (error) {
    res.json(error);
  }
};

export default router;
