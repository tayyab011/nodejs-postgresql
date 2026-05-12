import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRATION_TIME } from "../config/config.js";

export const EncodeToken = (email, user_id) => {
  const PAYLOAD = {
   email,
    user_id,
  };

  return jwt.sign(PAYLOAD, JWT_SECRET, {
    expiresIn: JWT_EXPIRATION_TIME,
  });
};

export const DecodeToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
};
