import User from "../models/userModel.js";

// Create a new user
export const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

// Get a user by email
export const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    throw new Error("Error fetching user by email: " + error.message);
  }
};

// Get a user by username
export const getUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ username });
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    throw new Error("Error fetching user by username: " + error.message);
  }
};

// Update user by ID
export const updateUserById = async (id, updates) => {
  try {
    const user = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

// Delete a user by ID
export const deleteUserById = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) throw new Error("User not found");
    return { message: "User deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};
