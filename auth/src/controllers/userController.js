import asyncHandler from "express-async-handler";
import * as userService from "../services/userServices.js";

// Create a user
export const createUser = asyncHandler(async (req, res) => {
  const { username, email, password, role } = req.body;
  
  const userData = { username, email, password, role };
  const user = await userService.createUser(userData);

  res.status(201).json(user);
});

// Get user by email
export const getUserByEmail = asyncHandler(async (req, res) => {
  const { email } = req.params;
  const user = await userService.getUserByEmail(email);

  res.status(200).json(user);
});

// Update user by ID
export const updateUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const user = await userService.updateUserById(id, updates);

  res.status(200).json(user);
});

// Delete user by ID
export const deleteUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = await userService.deleteUserById(id);

  res.status(200).json(result);
});
