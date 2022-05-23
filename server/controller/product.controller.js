const { Product } = require("../db");

const getOneProduct = async (req, res) => {};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.json({ products: allProducts });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured when grabing all products", error });
  }
};
const createProduct = async (req, res) => {
  try {
    const { name, description } = req.body;
    const oneProduct = await Product.create({ name, description });
    res.json({ message: "Product created successfully,", product: oneProduct });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured when creating the product", error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const oneProduct = await Product.destroy({
      where: {
        id,
      },
    });
    res.status(202).json({ message: "Product deleted" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured when deleting the product", error });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
};
