import { StatusCodes } from "http-status-codes";
import { userSevices } from "./user.service";
import { catchAsync } from "../../../utils/catchAsync";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createUser = catchAsync(async (req, res, next) => {
  const user = await userSevices.createUser(req.body);
  res.status(StatusCodes.OK).json({
    message: "User created successfully",
    user: user,
  });
});

const getAllUsers = catchAsync(async (req, res, next) => {
  const user = await userSevices.getAllUsers();
  res.status(StatusCodes.OK).json({
    message: "User get c successfully",
    user: user,
  });
});

export const userController = {
  createUser,
  getAllUsers,
};
