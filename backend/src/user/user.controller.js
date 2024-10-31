import { UserService } from "./user.service.js";

class UserController {

  createUser = async (req, res, next) => {
    try {
      const { userEmail, userPhone, userName, userPass, userGender, userBirth } = req.body;

      if (!userEmail || !userPhone || !userName || !userPass || userGender === undefined || !userBirth) {
        return res.status(400).json({
          msg: "Bad request: All fields are required",
          success: false,
        });
      }

      const birthDate = new Date(userBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const isBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

      if (age < 18 || (age === 18 && !isBirthdayPassed)) {
        return res.status(400).json({
          msg: "Bad request: You must be at least 18 years old",
          success: false,
        });
      }


      if (!userPhone && !userEmail) {
        return res.status(400).json({
          msg: "Bad request: At least one of phone number or email must be provided",
          success: false,
        });
      }

      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
      if (!passwordRegex.test(userPass)) {
        return res.status(400).json({
          msg: "Bad request: Password must be at least 8 characters long and contain at least one uppercase letter and one special character",
          success: false,
        });
      }
      u
      const createdUser = await UserService.createUser(req.body);
      if (createdUser?.error) {
        return res.status(400).json({
          msg: createdUser.error,
          success: false,
        });
      }

      return res.status(200).json({
        msg: "User created successfully",
        success: true,
        user: createdUser,
      });

    } catch (error) {
      res.status(500).json({
        msg: "An error occurred",
        success: false,
      });
    }
  };

  updateUser = async (req, res, next) => {
    const { userId } = req.params;
    try {
      const updatedUser = await UserService.updateUserById(userId, req.body);

      if (updatedUser?.error) {
        return res.status(400).json({
          msg: updatedUser.error,
          success: false,
        });
      }

      if (!updatedUser) {
        return res.status(404).json({
          msg: "User not found",
          success: false,
        });
      }

      return res.status(200).json({
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
        return res.status(404).json({
          msg: "User not found",
          success: false,
        });
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

  requestOTP = async (req, res, next) => {
    const { userPhone } = req.body;
    try {
      const user = await UserService.findUserByPhone(userPhone);
      if (!user) {
        return res.status(404).json({ msg: "User not found", success: false });
      }

      const otp = Math.floor(100000 + Math.random() * 900000);
      const sent = await UserService.sendOTP(userPhone, otp);

      if (sent) {
        await UserService.storeOTP(userPhone, otp);
        return res.status(200).json({ msg: "OTP sent successfully", success: true });
      } else {
        return res.status(500).json({ msg: "Failed to send OTP", success: false });
      }
    } catch (error) {
      res.status(500).json({ msg: "An error occurred", success: false });
    }
  };

  loginUser = async (req, res, next) => {
    try {
      const { identifier, password, otp } = req.body;

      const user = await UserService.findUserByEmail(identifier) || await UserService.findUserByPhone(identifier);
      if (!user) {
        return res.status(404).json({ msg: "User not found", success: false });
      }

      if (password) {
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          return res.status(401).json({ msg: "Invalid credentials", success: false });
        }
        return res.status(200).json({ msg: "Login successful", success: true, user });
      }

      if (otp) {
        const isValidOTP = await UserService.verifyOTP(user.userPhone, otp);
        if (!isValidOTP) {
          return res.status(401).json({ msg: "Invalid OTP", success: false });
        }
        return res.status(200).json({ msg: "Login successful with OTP", success: true, user });
      }

      return res.status(400).json({ msg: "Bad request: Provide password or OTP", success: false });
    } catch (error) {
      res.status(500).json({ msg: "An error occurred", success: false });
    }
  };

  requestPasswordReset = async (req, res, next) => {
    const { userEmail, userPhone } = req.body;
    try {
      const user = await UserService.findUserByEmail(userEmail) || await UserService.findUserByPhone(userPhone);
      if (!user) {
        return res.status(404).json({ msg: "User not found", success: false });
      }

      const verificationCode = Math.random().toString(36).substring(2, 8);
      await UserService.sendVerificationCode(userEmail || userPhone, verificationCode);
      await UserService.storeVerificationCode(user._id, verificationCode);

      return res.status(200).json({ msg: "Verification code sent successfully", success: true });
    } catch (error) {
      res.status(500).json({ msg: "An error occurred", success: false });
    }
  };

  verifyCodeAndResetPassword = async (req, res, next) => {
    const { userId, verificationCode, newPassword } = req.body;
    try {
      const user = await UserService.findUserById(userId);
      if (!user) {
        return res.status(404).json({ msg: "User not found", success: false });
      }

      if (user.verificationCode !== verificationCode) {
        return res.status(401).json({ msg: "Invalid verification code", success: false });
      }

      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
      if (!passwordRegex.test(newPassword)) {
        return res.status(400).json({
          msg: "Bad request: Password must be at least 8 characters long and contain at least one uppercase letter and one special character",
          success: false,
        });
      }

      user.userPass = newPassword; 
      await user.save();

      return res.status(200).json({ msg: "Password reset successfully", success: true });
    } catch (error) {
      res.status(500).json({ msg: "An error occurred", success: false });
    }
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
