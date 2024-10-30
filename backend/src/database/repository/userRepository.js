import { userModel } from "../schema/userSchema.js";

export const createUser = async (data) => {
  try {
    return await userModel.create(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

