import mongoose, { Document, Schema, model, Model } from "mongoose";


export interface IPost extends Document {
  tag: string;
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
  comments: mongoose.Types.ObjectId[];
}

const postSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    blog1description: {
      type: String,
      required: true,
    },
    blog1title: {
      type: String,
      required: true,
    },
    blog1image: {
      type: String,
      required: true,
    },
    blog2description: {
      type: String,
      required: true,
    },
    blog2title: {
      type: String,
      required: true,
    },
    blog2image: {
      type: String,
      required: true,
    },
    blog3description: {
      type: String,
      required: true,
    },
    blog3title: {
      type: String,
      required: true,
    },
    blog3image: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    }],
  },
  { timestamps: true }
);
postSchema.virtual('url').get(function(){
  return '/blogs/' + this._id
})
let Post: Model<IPost>;
try {
  Post = model<IPost>("Post");
} catch {
  Post = model<IPost>("Post", postSchema);
}




export default Post;
