import mongoose from "mongoose";

// Variable for track connection status
let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return console.log("MONGODB_URI not defined");

  if (isConnected) return console.log("using existing database connection");

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Mongoose connection established');
    
    isConnected = true;
  } catch (error: any) {
    console.log(error);
  }
};
