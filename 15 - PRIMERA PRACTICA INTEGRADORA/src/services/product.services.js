// import { prodDao } from "../daos/filesystem/product.dao.js";
import { prodDao } from "../daos/mongodb/product.dao.js";
import { CustomError } from "../utils/error.custom.js";

export const getAll = async () => {
  try {
    return await prodDao.getAll();
  } catch (error) {
    throw new Error(error);
  }
};

export const getById = async (id) => {
  try {
    const prod = await prodDao.getById(id);
    if (!prod) throw new CustomError("Product Not Found", 404);
    return prod;
  } catch (error) {
      throw error;
  }
};

export const create = async (obj) => {
  try {
    const newProd = await prodDao.create(obj);
    if (!newProd) throw new CustomError("Error create product", 400);
    return newProd;
  } catch (error) {
    throw error;
  }
};

export const update = async (id, obj) => {
  try {
    const prodUpd = await prodDao.update(id, obj);
    if (!prodUpd) throw new CustomError("error update product", 400);
    return prodUpd;
  } catch (error) {
    throw error;
  }
};

export const remove = async (id) => {
  try {
    const prodDel = await prodDao.delete(id);
    if (!prodDel) throw new CustomError("error delete product", 400);
    return prodDel;
  } catch (error) {
    throw error;
  }
};
