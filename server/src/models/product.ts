import mongoose, { model, Schema } from "mongoose";

const product = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  image: { type: String },
  price: { type: String },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
});

export default model("Product", product);
