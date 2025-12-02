import { User } from "../auth/auth.model";

export const userService = {
  async getAllUsers() {
    try {
      const users = await User.find({}, "name email");

      return users;
    } catch (error: any) {
      throw new Error(
        `Failed to get all users: ${error.message || "Unknown error"}`
      );
    }
  },
  // todo
};
