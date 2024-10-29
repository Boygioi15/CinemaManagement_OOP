import userModel from "./user.schema.js";

export class UserService {
  static createUser = async (userData) => {
    const createdUser = await userModel.create(userData);
    return createdUser;
  };

  static findUserByEmail = async (userEmail) => {
    const createdUser = await userModel.findOne({ userEmail });
    return createdUser;
  };

  static updateUserById = async (userId, updateData) => {
    const existingUser = await userModel.findById(userId);
    if (!existingUser) {
      return null;
    }
    const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    return updatedUser;
  };

  static deleteUserById = async (userId) => {
    const deletedUser = await userModel.findByIdAndDelete(userId);
    return deletedUser;
  };

  static getAllUsers = async () => {
    const users = await userModel.find({});
    return users;
  };
}
