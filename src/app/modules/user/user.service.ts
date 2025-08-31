import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (playload: Partial<IUser>) => {
  const { email, name } = playload;
  const user = await User.create({ email, name });

  return user;
};
const getAllUsers = async () => {
  const users = await User.find({});

  return users;
};

export const userSevices = {
  createUser,
  getAllUsers,
};
