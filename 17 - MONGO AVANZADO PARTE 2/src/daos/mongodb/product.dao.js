import { ProductModel } from "./models/product.model.js";

 class ProductDaoMongo {
  constructor(model){
    this.model = model
  }

  async getAll() {
    try {
      return await this.model.find({})
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      return await this.model.findById(id)
      // this.model.findOne({ _id: id })
      //db.products.findOne({ _id: ObjectId('fsfsdfsdf') })
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(obj) {
    try {
      return await this.model.create(obj)
      //db.products.insertOne(obj)
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, obj) {
    try {
      return await this.model.findByIdAndUpdate(id, obj, { new: true });  // ---> doc actualizado
      // return await this.model.updateOne(id, obj) --> { info.... }
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      return await this.model.findByIdAndDelete(id)
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const prodDao = new ProductDaoMongo(ProductModel);
