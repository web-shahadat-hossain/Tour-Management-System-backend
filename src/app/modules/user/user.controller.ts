import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "./user.model";

const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;

    const user = await User.create({ email, name });
    res.status(StatusCodes.OK).json({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({
      message: `Somthing is wrong with your request ${error}`,
    });
  }
};

export const userController = {
  createUser,
};
