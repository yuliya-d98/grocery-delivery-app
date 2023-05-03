import mongoose, { Schema, model } from "mongoose";

const user = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now() },
  isActivated: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  favourites: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  basket: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
});

export default model("User", user);
