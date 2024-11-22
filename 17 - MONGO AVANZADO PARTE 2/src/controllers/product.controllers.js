import * as services from "../services/product.services.js";

export const getAll = async (req, res, next) => {
  try {
    const response = await services.getAll();
    res.json(response);
  } catch (error) {
    next(error);  //---> errorHandler (middleware)
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await services.getById(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const newProduct = await services.create(req.body);
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productUpdated = await services.update(id, req.body);
    res.json(productUpdated);
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodDel = await services.remove(id);
    res.json(prodDel);
  } catch (error) {
    next(error);
  }
};
