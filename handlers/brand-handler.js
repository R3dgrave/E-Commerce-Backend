const Brand = require("./../db/brand");

async function getBrands() {
  let brands = await Brand.find();
  return brands.map(x => x.toObject());
}

async function getBrand(id) {
  let brand = await Brand.findById(id);
  return brand.toObject();
} 

async function addBrand(model) {
  const { name, categoryId } = model; 
  let brand = new Brand({
    name,
    categoryId
  });
  await brand.save();
  return brand.toObject();
}

async function updateBrand(id, model) {
  await Brand.findByIdAndUpdate(id, { name: model.name, categoryId: model.categoryId });
}


async function deleteBrand(id) {
  await Brand.findByIdAndDelete(id);
}

async function getBrandsByCategory(categoryId) {
  const filter = categoryId ? { categoryId } : {};
  let brands = await Brand.find(filter);
  return brands.map((x) => x.toObject());
}

module.exports = {
  getBrand,
  getBrands,
  addBrand,
  updateBrand,
  deleteBrand,
  getBrandsByCategory,
};
