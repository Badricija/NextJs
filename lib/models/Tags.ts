import mongoose, { Document } from "mongoose";

const TagSchema = new mongoose.Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export interface ITag extends Document {
  _id?: string;
  blogId: string;
  tag: string;
}

let TagModel: mongoose.Model<ITag>;

try {
  TagModel = mongoose.model<ITag>("Tag");
} catch {
  TagModel = mongoose.model<ITag>("Tag", TagSchema);
}

export default TagModel;