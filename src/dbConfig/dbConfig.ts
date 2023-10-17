import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI ? process.env.MONGO_URI : "");
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully!");
    });

    connection.on("error", (err) => {
      console.log("MongoDB Connection Failed ! ", err);
    });
  } catch (error: any) {
    console.log("An error occurred while connection to MongoDB!");
    console.log("Error : ", error.message);
  }
}
