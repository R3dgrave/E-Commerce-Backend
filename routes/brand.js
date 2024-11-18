const express = require("express");
const router = express.Router();
const Brand = require("./../db/brand");
const {
  addBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getBrands,
} = require("../handlers/brand-handler");

router.post("", async (req, res) => {
  console.log("Datos recibidos:", req.body);
  let model = req.body;
  let result = await addBrand(model);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  let model = req.body;
  let id = req.params["id"];
  await updateBrand(id, model);
  res.send({ message: "Marca actualizada" });
});


router.delete("/:id", async (req, res) => {
  console.log("aqui");
  let id = req.params["id"];
  await deleteBrand(id);
  res.send({ message: "eliminado" });
});

router.get("/:id", async (req, res) => {
  console.log("aqui");
  let id = req.params["id"];
  let brand = await getBrand(id);
  res.send(brand);
});

router.get("", async (req, res) => {
  console.log("aqui");
  let brands = await getBrands();
  res.send(brands);
});

router.get("/categories/:categoryId", async (req, res) => {
  const categoryId = req.params.categoryId;
  const brands = await getBrandsByCategory(categoryId);
  res.send(brands);
});

module.exports = router;
