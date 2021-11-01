import mongoose from "mongoose";

const geometryScheme = mongoose.Schema({
  lng: Number,
  lat: Number,
  address: String,
});

const RestaurantScheme = mongoose.Schema({
  name: String,
  image: String,
  description: String,
  rating: Number,
  geometry: {
    type: geometryScheme,
    required: true,
  },
  comments: { type: [mongoose.Types.ObjectId], ref: "comment" },
});

const RestaurantModel = mongoose.model("restaurant", RestaurantScheme);

export default RestaurantModel;
