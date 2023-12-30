import mongoose from "mongoose";

export interface IComment extends Document {
  _id?: string;
  blogId: string;
  comment: string;
  author: string;
  createdAt?: string;
  updatedAt?: string;
}

const CommentSchema = new mongoose.Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

let Comment: mongoose.Model<IComment>;
try {
  Comment = mongoose.model<IComment>("Comment");
} catch {
  Comment = mongoose.model<IComment>("Comment", CommentSchema);
}
export default Comment;


