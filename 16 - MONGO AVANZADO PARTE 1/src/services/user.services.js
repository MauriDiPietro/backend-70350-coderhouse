// import { userDao } from "../daos/filesystem/product.dao.js";
import { petDao } from "../daos/mongodb/pet.dao.js";
import { userDao } from "../daos/mongodb/user.dao.js";
import { CustomError } from "../utils/error.custom.js";
import fs from 'fs'
import path from 'path'
import * as petServices from './pet.services.js';

export const getAll = async () => {
  try {
    return await userDao.getAll();
  } catch (error) {
    throw new Error(error);
  }
};

export const getById = async (id) => {
  try {
    const user = await userDao.getById(id);
    if (!user) throw new CustomError("user Not Found", 404);
    return user;
  } catch (error) {
    throw error;
  }
};

export const getByName = async (name) => {
    try {
      const user = await userDao.getUserByName(name);
      if (!user) throw new CustomError("user Not Found", 404);
      return user;
    } catch (error) {
      throw error;
    }
  };

export const create = async (obj) => {
  try {
    const newUser = await userDao.create(obj);
    if (!newUser) throw new CustomError("Error create user", 400);
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const createFileUsers = async () => {
    try {
      const usersFile = JSON.parse(fs.readFileSync(`${path.join(process.cwd(), 'src/data/Users.json')}`));  
      const newUsers = await userDao.create(usersFile);
      if (!newUsers) throw new CustomError("Error create user", 400);
      return newUsers.length;
    } catch (error) {
      throw error;
    }
  };

export const update = async (id, obj) => {
  try {
    const userUpd = await userDao.update(id, obj);
    if (!userUpd) throw new CustomError("error update user", 400);
    return userUpd;
  } catch (error) {
    throw error;
  }
};

export const remove = async (id) => {
  try {
    const userDel = await userDao.delete(id);
    if (!userDel) throw new CustomError("error delete user", 400);
    return userDel;
  } catch (error) {
    throw error;
  }
};

export const addPetToUser = async(userId, petId) => {
    try {
        await petServices.getByIdPet(petId);   
        const userUpd = await userDao.addPetToUser(userId, petId);       
        if(!userUpd) throw new CustomError('Error adding pet', 404);
        return userUpd;
    } catch (error) {
        throw error;
    }
}
