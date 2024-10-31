import userModel from "./user.schema.js";
import twilio from 'twilio';

const accountSid = 'ACb4ac306a37c9189176f12d924fba5624';
const authToken = '9a0736c049f199732580fcd24cf9eaf0';
const client = twilio(accountSid, authToken);


export class UserService {
  static findUserById = async (userId) => {
    return await userModel.findById(userId);
  };
  
  static findUserByEmail = async (userEmail) => {
    return await userModel.findOne({ userEmail });
  };

  static findUserByPhone = async (userPhone) => {
    return await userModel.findOne({ userPhone });
  };

  static createUser = async (userData) => {
    const { userEmail, userPhone } = userData;
    const existingUserPhone = await this.findUserByPhone(userPhone);
    if (existingUserPhone) {
      return { error: "Phone number already registered" };
    }

    const existingUserEmail = await this.findUserByEmail(userEmail);
    if (existingUserEmail) {
      return { error: "Email already registered" };
    }
    return await userModel.create(userData);
  };

  static updateUserById = async (userId, updateData) => {
    const { userEmail, userPhone } = updateData;

    const existingUser = await userModel.findById(userId);
    if (!existingUser) {
      return { error: "User not found" };
    }

    if (userPhone) {
      const existingUserPhone = await this.findUserByPhone(userPhone);
      if (existingUserPhone && existingUserPhone._id.toString() !== userId) {
        return { error: "Phone number already registered" };
      }
    }

    if (userEmail) {
      const existingUserEmail = await this.findUserByEmail(userEmail);
      if (existingUserEmail && existingUserEmail._id.toString() !== userId) {
        return { error: "Email already registered" };
      }
    }

    return await userModel.findByIdAndUpdate(userId, updateData, { new: true });
  };

  static deleteUserById = async (userId) => {
    return await userModel.findByIdAndDelete(userId);
  };

  static getAllUsers = async () => {
    return await userModel.find({});
  };

  static sendOTP = async (userPhone, otp) => {
    try {
      await client.messages.create({
        body: `Your OTP verification code is: ${otp}`,
        from: '+14438704051',
        to: userPhone,
      });
      return true;
    } catch (error) {
      console.error("Error sending OTP:", error);
      return false;
    }
  };

  static storeOTP = async (userPhone, otp) => {
    const otpExpiration = new Date(Date.now() + 10 * 60000);
    return await userModel.findOneAndUpdate(
      { userPhone },
      { otp, otpExpiration },
      { new: true }
    );
  };

  static verifyOTP = async (userPhone, otp) => {
    const user = await this.findUserByPhone(userPhone);
    if (!user) return false;
    if (user.otp === otp && user.otpExpiration > new Date()) {
      return true;
    }
    return false;
  };

  static sendVerificationCode = async (contact, code) => {
    try {
      await sendEmail(contact, `Your verification code is: ${code}`);
      await this.sendOTP(contact, code);
      return true;
    } catch (error) {
      console.error("Error sending verification code:", error);
      return false;
    }
  };

  static storeVerificationCode = async (userId, code) => {
    return await userModel.findByIdAndUpdate(userId, { verificationCode: code }, { new: true });
  };
}
