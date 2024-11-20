import { connect } from "mongoose";
import 'dotenv/config'

const MONGO_URL = process.env.MONGO_URL;

// console.log(MONGO_URL);


export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
  } catch (error) {
    throw new Error(error);
  }
};

