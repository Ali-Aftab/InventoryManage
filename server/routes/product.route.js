const {
  getAllProducts,
  createProduct,
  deleteProduct,
} = require("../controller/product.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/products", createProduct);
  app.delete("api/products/:id", deleteProduct);
  app.get("/api/products/all", getAllProducts);
  app.get("api/products");
};
