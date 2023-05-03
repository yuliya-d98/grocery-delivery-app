import mongoose, { Schema, model } from "mongoose";

const review = new Schema({
  text: { type: String, required: [true, "Review should contain text"] },
  rating: {
    type: Number,
    min: [1, "Rating should be more than 0, got {VALUE}"],
    max: [5, "Rating should be less than 6, got {VALUE}"],
    required: true,
  },
  created: { type: Date, default: Date.now() },
  product: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  user: [{ type: mongoose.Types.ObjectId, ref: "User" }],
});

export default model("Review", review);
