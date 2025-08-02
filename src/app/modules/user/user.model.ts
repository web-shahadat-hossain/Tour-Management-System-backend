import { model, Schema } from "mongoose";
import { isActive, isAuthProvider, IUser } from "./user.interface";

const isAuthProviderSchema = new Schema<isAuthProvider>(
  {
    provider: {
      type: String,
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    _id: false,
  }
);

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  picture: {
    type: String,
  },
  address: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: String,
    enum: Object.values(isActive),
    default: isActive.ACTIVE,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  auths: [isAuthProviderSchema],
});

export const User = model<IUser>("User", userSchema);
