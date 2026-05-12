import { DecodeToken } from "../utility/tokenUtility.js";

export default  (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = DecodeToken(token);
  if (!decoded) {
    return res.status(401).json({ message: "Invalid token" });
  }

  req.user = {
    user_id: decoded.user_id,
    email: decoded.email,
  
  };
console.log(req.user)
  next();
};
