const service = require('../services');

const createCategory = async (req, res) => {
  const newCategory = await service.categories.createCategory(req.body);

  return res.status(201).send(newCategory);
};

const getCategories = async (_req, res) => {
  try {
    const categories = await service.categories.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Internal error' });
  }
};

module.exports = {
  createCategory,
  getCategories,
};