import userModel from "./user.schema.js";

export class UserService {
  static createUser = async (userData) => {
    const createdUser = await userModel.create(userData);
    //console.log(createdUser);
    return createdUser;
  };
  static findUserByEmail = async (email) => {
    const createdUser = await userModel.findOne({ email });
    return createdUser;
  };
}
