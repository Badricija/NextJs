import mongoose, { Document, Schema, model, Model } from "mongoose";


export interface IPost extends Document {
  _id?: string;
  title: string;
  description: string;
  image: string;
  blog1description: string;
  blog1title: string;
  blog1image: string;
  blog2description: string;
  blog2title: string;
  blog2image: string;
  blog3description: string;
  blog3title: string;
  blog3image: string;
  comments: string;
  createdAt?: string;
  updatedAt?: string;
}

const postSchema: Schema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    blog1description: {
      type: String,
    },
    blog1title: {
      type: String,
    },
    blog1image: {
      type: String,
    },
    blog2description: {
      type: String,
    },
    blog2title: {
      type: String,
    },
    blog2image: {
      type: String,
    },
    blog3description: {
      type: String,
    },
    blog3title: {
      type: String,
    },
    blog3image: {
      type: String,
    },
    
  },
  { timestamps: true }
);

let Post: Model<IPost>;
try {
  Post = model<IPost>("Post");
} catch {
  Post = model<IPost>("Post", postSchema);
}




export default Post;
