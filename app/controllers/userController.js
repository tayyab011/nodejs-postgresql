import bcrypt from "bcryptjs";
import { EncodeToken } from "../utility/tokenUtility.js";
import { createUser, findUserByEmail } from "../model/user.query.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exist = await findUserByEmail(email);
    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(name, email, hashedPassword);

    res.status(201).json({
      message: "User registered successfully",
      userId: user.id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = EncodeToken(user.email, user.id);
    const cookieOption = {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
    };

    res.cookie("token", token, cookieOption);
    res.status(200).json({
      success: true,
      token,
      user,
      message: "User Login Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
