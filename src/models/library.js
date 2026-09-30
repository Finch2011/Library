import mongoose, { Schema, model } from "mongoose";

const librarySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});

export const Library = model("Library", librarySchema);