import { model, Schema } from "mongoose";

const product = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  image: { type: String },
  price: { type: String },
});

export default model("Product", product);
