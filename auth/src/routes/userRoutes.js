import express from "express";
import * as userController from "../controllers/userController.js";  
import { protect, admin } from "../middleware/authMiddleware.js";  

const router = express.Router();

// Route to register a new user
router.post("/register", userController.registerUser);

// Route to login a user
router.post("/login", userController.loginUser);

// Route to get the user profile (protected route)
router.get("/profile", protect, userController.getUserProfile);

// Route to update user profile (protected route)
router.put("/profile", protect, userController.updateUserProfile);

// Route for admin to get all users (admin only)
router.get("/", protect, admin, userController.getAllUsers);

// Route for admin to delete a user (admin only)
router.delete("/:id", protect, admin, userController.deleteUser);

export default router;
