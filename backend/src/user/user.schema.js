import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    userId: String,
    userName: String,
    userBirth: Date,
    userEmail: String,
    userPhone: String,
    userPass: String,
  },
  {
    timestamps: true,
  }
);

//Export the model
export default mongoose.model("userTest", userSchema);
