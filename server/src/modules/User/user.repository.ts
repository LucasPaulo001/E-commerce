import { TCreateUser, TUpdateUser } from "../../shared/dto/user/user.dto.js";
import userModel from "./user.model.js";

export const UserRepository = {
  create(data: TCreateUser) {
    return userModel.create(data);
  },

  findById(id: string) {
    return userModel.findById(id);
  },

  findByEmail(email: string) {
    return userModel.findOne({ email: email });
  },

  update(id: string, data: Partial<TUpdateUser>) {
    return userModel.findByIdAndUpdate(id, data, { new: true });
  },

  findByUserName(userName: string){
    return userModel.findOne({ userName: userName });
  }

};
