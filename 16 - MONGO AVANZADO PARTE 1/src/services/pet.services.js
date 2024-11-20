import { petDao } from "../daos/mongodb/pet.dao.js";
import { CustomError } from "../utils/error.custom.js";

export const getByIdPet = async (id) => {
  try {
    const pet = await petDao.getPetById(id);
    if (!pet) throw new CustomError("Pet not found", 404);
    return pet;
  } catch (error) {
    throw error;
  }
};

export const createPet = async (obj) => {
  try {
    return await petDao.createPet(obj);
  } catch (error) {
    throw error;
  }
};

export const updatePet = async (id, obj) => {
  try {
    return await petDao.updatePet(id, obj);
  } catch (error) {
    throw error;
  }
};

export const deletePet = async (id) => {
  try {
    return await petDao.deletePet(id);
  } catch (error) {
    throw error;
  }
};
