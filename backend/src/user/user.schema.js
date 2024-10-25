import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    age: Number,
  },
  {
    timestamps: true,
  }
);

//Export the model
export default mongoose.model("users", userSchema);
