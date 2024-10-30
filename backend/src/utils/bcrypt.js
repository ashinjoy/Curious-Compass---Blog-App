import { hash } from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRound = 10;
    return await hash(password, saltRound);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
