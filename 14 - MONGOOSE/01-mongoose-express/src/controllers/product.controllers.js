import prodManager from "../managers/product.manager.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const response = await prodManager.getAllProducts();
    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await prodManager.getProductById(id);
    if (!item) throw new Error("Product not found!");
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = await prodManager.createProduct(req.body);
    if (!newProduct) throw new Error("Validation Error!");
    else res.json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productUpdated = await prodManager.updateProduct(id, req.body);
    if (!productUpdated) throw new Error("Product not found");
    res.json(productUpdated);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodDel = await prodManager.deleteProduct(id);
    if (!prodDel) throw new Error("Product not found");
    res.json({ message: "product deleted" });
  } catch (error) {
    next(error);
  }
};
