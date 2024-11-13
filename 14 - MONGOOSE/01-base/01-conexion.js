import { connect } from "mongoose";

// const MONGO_URL = 'mongodb://localhost:27017/coder70350';
const MONGO_URL =
  "mongodb+srv://admin:admin@cluster0.xibok.mongodb.net/coder70350?retryWrites=true&w=majority&appName=Cluster0";

export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
    console.log('conectado a mongo');
  } catch (error) {
    throw new Error(error);
  }
};

