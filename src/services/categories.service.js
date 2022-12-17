const { Category } = require('../models');

const createCategory = async (body) => {
  const { name } = body;
  const category = await Category.findOne({ where: { name } });

  if (category) {
    const error = new Error('Category Already Registered');
    error.status = 409;

    throw error;
  }

  const newcategory = await Category.create({ name }); 

  return newcategory;
};

const getCategories = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  createCategory,
  getCategories,
};