const express = require("express");
const router = express.Router();
const Product = require("./../db/product");
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
} = require("../handlers/product-handler");

router.get("/:id", async (req, res) => {
    let id = req.params["id"];
    let product = await getProduct(id);
    res.send(product);
  });

router.get("", async (req, res) => {
  let products = await getAllProducts();
  res.send(products);
});

router.post("/", async (req, res) => {
  model = req.body;
  let product = await addProduct(model);
  res.send(product);
});

router.put("/:id", async (req, res) => {
  model = req.body;
  let id = req.params["id"];
  await updateProduct(id, model);
  res.send({ message: "actualizado" });
});

router.delete("/:id", async (req, res) => {
  let id = req.params["id"];
  await deleteProduct(id);
  res.send({ message: "Eliminado" });
});

module.exports = router;
