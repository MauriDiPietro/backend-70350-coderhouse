import fs from "node:fs";
import { v4 as uuidv4 } from "uuid";
import path from 'path'

class ProductDaoFS {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    try {
      if (fs.existsSync(this.path)) {
        const products = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(products);
      } else return [];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async create(obj) {
    try {
      const product = {
        id: uuidv4(),
        ...obj,
      };
      const products = await this.getAll();
      const prodExist = products.find((p) => p.id === product.id);
      if (prodExist) throw new Error("product already exists");
      products.push(product);
      await fs.promises.writeFile(this.path, JSON.stringify(products));
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      const products = await this.getAll();
      if (!products.length > 0) throw new Error("list products is empty");
      const product = products.find((product) => product.id === id);
      if (!product) throw new Error("product not found");
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(obj, id) {
    try {
      //array de usuarios
      const products = await this.getAll();
      //user encontrado
      let prod = await this.getById(id); //si no lo encuentra, devuelve el error
      // le asignamos los valores nuevos que legan por body
      prod = { ...prod, ...obj };
      //filtramos y sacamos el usuario original (linea 64)
      const newArray = products.filter((prod) => prod.id !== id);
      newArray.push(prod);
      //lo guardamos en el json
      await fs.promises.writeFile(this.path, JSON.stringify(newArray));
      return prod;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      const prod = await this.getById(id);
      const products = await this.getAll();
      const newArray = products.filter((prod) => prod.id !== id);
      await fs.promises.writeFile(this.path, JSON.stringify(newArray));
      return prod;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const prodDao = new ProductDaoFS(path.join(process.cwd(), "src/daos/filesystem/data/products.json"));
