import { Types } from "mongoose";

enum Role {
  Admin = "ADMIN",
  USER = "USER",
  SUPER_ADMIN = "SUPER_ADMIN",
  GUIDE = "GUIDE",
}

export enum isActive {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export interface isAuthProvider {
  provider: string;
  providerId: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: Role;
  phone?: string;
  picture?: string;
  address?: string;
  isDeleted?: boolean;
  isActive?: isActive;
  isVerified?: boolean;
  auths: isAuthProvider[];
  bookings?: Types.ObjectId[];
  guides?: Types.ObjectId[];
}
