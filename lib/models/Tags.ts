import mongoose, { Document } from "mongoose";
const TagSchema = new mongoose.Schema({
	tag: {
		type: String,
		required: true,
	},
});
export interface ITag extends Document {
	_id: string;
	blogId: string;
	tag: string;
	createdAt?: string;
	updatedAt?: string;
}
let TagModel: mongoose.Model<ITag>;

try {
  TagModel = mongoose.model<ITag>("Tag");
} catch {
  TagModel = mongoose.model<ITag>("Tag", TagSchema);
}

export default TagModel;