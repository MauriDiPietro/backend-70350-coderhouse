import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  first_name: {
    type: String,
    // required: true,
    required: [true, "first_name is required"],
    // minLength: 3
    minLength: [3, "minimum 3 characters"],
  },
  last_name: {
    type: String,
    // required: true,
    required: [true, "first_name is required"],
    // minLength: 3
    minLength: [3, "minimum 3 characters"],
  },
  email: {
    type: String,
    // required: true,
    required: [true, "first_name is required"],
    // minLength: 3
    minLength: [10, "minimum 10 characters"],
    unique: true
  },
  admin: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: {
      values: ["ADMIN", "USER"],
      message: "roles: ADMIN | USER",
    },
  },
});

export const UserModel = model("users", UserSchema);


