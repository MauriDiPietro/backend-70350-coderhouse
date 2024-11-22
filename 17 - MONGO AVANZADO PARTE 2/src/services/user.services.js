// import { userDao } from "../daos/filesystem/product.dao.js";
import { petDao } from "../daos/mongodb/pet.dao.js";
import { userDao } from "../daos/mongodb/user.dao.js";
import { CustomError } from "../utils/error.custom.js";
import fs from "fs";
import path from "path";
import * as petServices from "./pet.services.js";
import { getRandomNumber } from "../utils/user.utils.js";

export const getAll = async (page, limit, first_name, sort) => {
  try {
    return await userDao.getAll(page, limit, first_name, sort);
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
    const usersFile = JSON.parse(
      fs.readFileSync(`${path.join(process.cwd(), "src/data/Users.json")}`)
    );
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

export const addPetToUser = async (userId, petId) => {
  try {
    await petServices.getByIdPet(petId);
    const userUpd = await userDao.addPetToUser(userId, petId);
    if (!userUpd) throw new CustomError("Error adding pet", 404);
    return userUpd;
  } catch (error) {
    throw error;
  }
};

export const aggregation1 = async (gender) => {
  try {
    return await userDao.aggregation1(gender);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateManyAge = async () => {
  try {
    const users = await getAll();
    const updatePromises = users.map((user) => {
      return update(user._id, {
        $set: { age: getRandomNumber() },
      });
    });

    await Promise.all(updatePromises);
    return { message: "updated ok" };
  } catch (error) {
    throw new Error(error);
  }
};

export const aggregation2 = async (age) => {
  try {
    return await userDao.aggregation2(age);
  } catch (error) {
    throw new Error(error);
  }
};
