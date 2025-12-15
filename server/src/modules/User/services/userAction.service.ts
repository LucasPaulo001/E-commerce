import { TCreateUser, TUpdateUser } from "../../../shared/dto/user/user.dto.js";
import { UserRepository } from "../user.repository.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../../settings/jwt/generateJwt.js"
import { TUser } from "../../../shared/types/user.type.js";

export const registerService = async (data: TCreateUser) => {

    const user = await UserRepository.findByEmail(data.email);
    if (user) {
      throw new Error("Usuário já existe.");
    }

    const salts = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(data.password, salts);

    const newUser = await UserRepository.create({
      name: data.name,
      email: data.email,
      userName: data.userName,
      password: hashPass,
      phone: data.phone,
      sexo: data.sexo
    });

    return {
        msg: "Cadastro feito com sucesso.",
        newUser
    }
};

export const loginService = async (email: string, password: string) => {

    const user = await UserRepository.findByEmail(email);

    if(!user) throw new Error("Usuário não encontrado.");

    if(!(await bcrypt.compare(password, user.password))){
        throw new Error("Senha incorreta.");
    }

    const token = await generateToken(String(user._id));

    return {
        msg: "Login feito com sucesso.",
        token,
        id: user._id
    }
}

export const ProfileService = async (user: TUser) => {
    return {
        id: user._id,
        name: user.name,
        userName: user.userName,
        email: user.email,
        role: user.role,
        phone: user.phone,
        acive: user.active,
        adress: user.adress,
        createdAt: user.createdAt
    }

}

export const EditProfileService = async (userId: string, data: TUpdateUser) => {

    const user = await UserRepository.findById(userId);

    if(!user) throw new Error("Usuário não encontrado.");

    const updates: Partial<TUpdateUser> = {};

    if(data.name && data.name !== user.name){
        updates.name = data.name;
    }

    if(data.userName && data.userName !== user.userName){
        const existUserName = await UserRepository.findByUserName(data.userName);

        if(existUserName){
            throw new Error("O nome de usuário já existe.");
        }
        else {
            updates.userName = data.userName;
        }
    }

    if(data.phone && data.phone !== user.phone){
        updates.phone = data.phone
    }

    if(data.password && data.password !== user.password){
        const salt = await bcrypt.genSalt();
        const hashPass = await bcrypt.hash(data.password, salt);

        updates.password = hashPass;
    }

    if(data.sexo && data.sexo !== user.sexo){
        updates.sexo = data.sexo;
    }

    if(data.adress && data.adress !== user.adress){
        updates.adress = data.adress;
    }

    if(Object.keys(updates).length === 0){
        return { message: "Nada para atualizar" };
    }

    console.log(updates);

    const updatedUser = await UserRepository.update(userId, updates);

    return { updatedUser }

}