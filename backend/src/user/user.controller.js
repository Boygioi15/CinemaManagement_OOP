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
}

export default new UserController();
