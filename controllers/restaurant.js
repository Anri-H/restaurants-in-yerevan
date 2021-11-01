import express from "express";
import RestaurantModel from "../models/restaurant.js";

const router = express.Router();

export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await RestaurantModel.find();

    res.json(restaurants);
  } catch (error) {
    res.json(error);
  }
};

export const getRestaurantById = async (req, res) => {
  const { id } = req.params;

  try {
    const restaurantWithComments = await RestaurantModel.findById(id).populate(
      "comments"
    );
    res.json(restaurantWithComments);
  } catch (error) {
    res.json(error);
  }
};

export const addRestaurant = async (req, res) => {
  const { name, description, rating, geometry } = req.body;
  const newRestaurant = new RestaurantModel({
    name,
    description,
    rating,
    geometry,
  });

  try {
    await newRestaurant.save();

    res.json(newRestaurant);
  } catch (error) {
    res.json(error);
  }
};

export default router;
