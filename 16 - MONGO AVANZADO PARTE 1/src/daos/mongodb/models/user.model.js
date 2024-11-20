import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    index: true //
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true    //
  },
  gender: {
    type: String,
    required: true,
  },
  pets: [
    {
        type: Schema.Types.ObjectId,
        ref: 'pets',
        default: []
    }
  ]
});

UserSchema.pre('find', function(){
    this.populate('pets')
})

export const UserModel = model("users", UserSchema);
