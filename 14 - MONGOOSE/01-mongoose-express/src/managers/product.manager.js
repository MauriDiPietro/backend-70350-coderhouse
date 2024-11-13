import { ProductModel } from "../models/product.model.js";

 class ProductManager {
  constructor(model){
    this.model = model
  }

  async getAllProducts() {
    try {
      return await this.model.find({})
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProductById(id) {
    try {
      return await this.model.findById(id)
      // this.model.findOne({ _id: id })
      //db.products.findOne({ _id: ObjectId('fsfsdfsdf') })
    } catch (error) {
      throw new Error(error);
    }
  }

  async createProduct(obj) {
    try {
      return await this.model.create(obj)
      //db.products.insertOne(obj)
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProduct(id, obj) {
    try {
      return await this.model.findByIdAndUpdate(id, obj, { new: true });  // ---> doc actualizado
      // return await this.model.updateOne(id, obj) --> { info.... }
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProduct(id) {
    try {
      return await this.model.findByIdAndDelete(id)
    } catch (error) {
      throw new Error(error);
    }
  }
}

const prodManager = new ProductManager(ProductModel);
export default prodManager;
