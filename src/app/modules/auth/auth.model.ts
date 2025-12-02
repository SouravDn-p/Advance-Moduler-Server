import { model } from "mongoose";
import bcrypt from "bcrypt";
import { IUser, userSchema } from "../user/user.model";

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export const User = model<IUser>("User", userSchema);
