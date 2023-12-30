import mongoose, { ConnectOptions } from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("Mongo connection successful");
  } catch (error) {
    throw new Error("Error in connecting to MongoDB");
  }
};

export default connect;