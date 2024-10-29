import { UserService } from "./user.service.js";

class UserController {
  createUser = async (req, res, next) => {
    if (!req?.body?.userEmail) {
      res.status(400).json({
        msg: "Bad request",
        success: false,
      });
      return;
    }
    if (await UserService.findUserByEmail(req.body.userEmail)) {
      res.status(400).json({
        msg: "The email has already been registered",
        success: false,
      });
      return;
    }
    const createdUser = await UserService.createUser(req.body);
    res.status(200).json({
      msg: createdUser,
      success: true,
    });
  };

  updateUser = async (req, res, next) => {
    const { userId } = req.params;
    const updateData = req.body;
    try {
      const updatedUser = await UserService.updateUserById(userId, updateData);
      if (!updatedUser) {
        res.status(404).json({
          msg: "User not found",
          success: false,
        });
        return;
      }
      res.status(200).json({
        msg: "User updated successfully",
        success: true,
        user: updatedUser,
      });
    } catch (error) {
      res.status(500).json({
        msg: "An error occurred",
        success: false,
      });
    }
  };

  deleteUser = async (req, res, next) => {
    const { userId } = req.params;
    try {
      const deletedUser = await UserService.deleteUserById(userId);
      if (!deletedUser) {
        res.status(404).json({
          msg: "User not found",
          success: false,
        });
        return;
      }
      res.status(200).json({
        msg: "User deleted successfully",
        success: true,
        user: deletedUser,
      });
    } catch (error) {
      res.status(500).json({
        msg: "An error occurred",
        success: false,
      });
    }
  };

  getAllUsers = async (req, res, next) => {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json({
        msg: users,
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        msg: "Error",
        success: false,
      });
    }
  };
}

export default new UserController();
