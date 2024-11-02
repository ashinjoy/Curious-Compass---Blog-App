import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    content: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export const postModel = model("post", postSchema);
