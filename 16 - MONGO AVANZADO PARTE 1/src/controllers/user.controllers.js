import * as services from "../services/user.services.js";

export const getAll = async (req, res, next) => {
  try {
    const response = await services.getAll();
    res.json(response);
  } catch (error) {
    next(error); //---> errorHandler (middleware)
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await services.getById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const getByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    const user = await services.getByName(name);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const newUser = await services.create(req.body);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};

export const createFileUsers = async (req, res, next) => {
  try {
    const response = await services.createFileUsers();
    res.json(`${response} Insertados correctamente`);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userUpdated = await services.update(id, req.body);
    res.json(userUpdated);
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDel = await services.remove(id);
    res.json(userDel);
  } catch (error) {
    next(error);
  }
};

export const addPetToUser = async(req, res, next) => {
    try {
        const { userId } = req.params;
        const { petId } = req.params;
        const newPetToUser = await services.addPetToUser(userId, petId);       
        res.json(newPetToUser);
    } catch (error) {
        next(error);
    }
}
