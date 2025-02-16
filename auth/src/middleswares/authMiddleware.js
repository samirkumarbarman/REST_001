import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Middleware to protect routes that require authentication
export const protect = async (req, res, next) => {
  let token;

  // Check if the request has the Authorization header with Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get the token from the Authorization header
      token = req.headers.authorization.split(" ")[1];

      // Verify the token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user to the request object (decoded from the token)
      req.user = await User.findById(decoded.id);

      // Continue to the next middleware or route handler
      next();
    } catch (error) {
      // If the token is invalid or expired, return a 401 Unauthorized error
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  // If no token is found in the header, return a 401 Unauthorized error
  if (!token) {
    res.status(401).json({ message: "No token, not authorized" });
  }
};

// Middleware to restrict access to only admin users
export const admin = (req, res, next) => {
  // If the user role is 'admin', proceed
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    // If the user is not an admin, return a 403 Forbidden error
    res.status(403).json({ message: "Not authorized as an admin" });
  }
};
