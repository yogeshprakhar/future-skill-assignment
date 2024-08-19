import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Post = mongoose.model("Post", postSchema);
