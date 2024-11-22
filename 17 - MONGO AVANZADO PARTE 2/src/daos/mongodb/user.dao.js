import { UserModel } from "./models/user.model.js";

class UserDaoMongo {
  constructor(model) {
    this.model = model;
  }

  async create(obj) {
    try {
      return await this.model.create(obj);
    } catch (error) {
      throw new Error(error);
    }
  }
  async getAll(page = 1, limit = 10, first_name, sort) {
    try {
      const filter = first_name ? { 'first_name': first_name } : {};
      let sortOrder = {};
      if(sort) sortOrder.age = sort === 'asc' ? 1 : sort === 'desc' ? -1 : null;
      // $sort: { age: 1 }
      return await this.model.paginate(filter, { page, limit, sort: sortOrder });
    } catch (error) {
      throw new Error(error);
    }
  }
  async getById(id) {
    try {
      return await this.model
        .findById(id)
        .populate("pets", { name: 1, _id: 0 }); //!nombre de la propiedad a popular
      //   return await this.model.findById(id).populate('pets');
      //   return await this.model.findById(id).populate('pets', { name: 1 });
      //   .explain();
    } catch (error) {
      throw new Error(error);
    }
  }
  async update(id, obj) {
    try {
      return this.model.findByIdAndUpdate(id, obj, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete() {
    try {
      return this.model.findByIdAndDelete(id, obj, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }
  async getUserByName(name) {
    try {
      const response = await this.model.find({ first_name: name }).explain();
      return response.executionStats;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addPetToUser(userId, petId) {
    try {
      const response = await this.model.findByIdAndUpdate(
        userId,
        { $push: { pets: petId } },
        { new: true }
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async aggregation1(gender) {
    try {
      const response = await this.model.aggregate([
        {
          $match: {
            gender: `${gender}`,
            age: { $gte: 30 },
          },
        },
      ]);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async aggregation2(age) {
    try {
      const response = await this.model.aggregate([
        {
          $match: {
            age: { $gte: parseInt(age) },
          },
        },
        {
          $group: {
            _id: "$gender",
            average_age: { $avg: "$age" },
            count: { $sum: 1 },
            youngest: { $min: "$age" },
            oldest: { $max: "$age" },
          },
        },
        {
          $sort: {
            average_age: 1,
          },
        },
      ]);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const userDao = new UserDaoMongo(UserModel);
