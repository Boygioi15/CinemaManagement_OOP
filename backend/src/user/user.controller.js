import { UserService } from "./user.service.js";

class UserController {
  createUser = async (req, res, next) => {
    if (!req?.body?.email) {
      res.status(400).json({
        msg: "Bad request",
        success: false,
      });
      return;
    }
    if (await UserService.findUserByEmail(req.body.email)) {
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

  deleteUser = async (req, res, next) => {
    console.log(req.body);
    if (!req?.body?.email) {
      res.status(400).json({
        msg: "Email is required for deletion",
        success: false,
      });
      return;
    }

    const userToDelete = await UserService.findUserByEmail(req.body.email);

    if (!userToDelete) {
      res.status(404).json({
        msg: "User not found",
        success: false,
      });
      return;
    }

    await UserService.deleteUser(req.body.email);

    res.status(200).json({
      msg: "User deleted successfully",
      success: true,
    });
  };
}

export default new UserController();
