import { PetModel } from "./models/pet.model.js";

class PetDaoMongoDB {
  constructor(model) {
    this.model = model;
  }
  async getPetById(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllPets() {
    try {
      const response = await this.model.find({});
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createPet(obj) {
    try {
      const response = await this.model.create(obj);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updatePet(id, obj) {
    try {
      return await this.model.findByIdAndUpdate(id, obj, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deletePet(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const petDao = new PetDaoMongoDB(PetModel);
