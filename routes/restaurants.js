import express from "express";
import {
  getRestaurants,
  addRestaurant,
  getRestaurantById,
} from "../controllers/restaurant.js";

const router = express.Router();

router.get("/", getRestaurants);
router.post("/", addRestaurant);
router.get("/:id", getRestaurantById);

export default router;
