import { Router } from 'express';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', (req, res) => {
  res.send('Ok');
});

// Create product
router.get('/products', (req, res) => {
  res.send('Ok');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('Ok');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('Ok');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('Ok');
});

// Change orders status
router.patch('/order/:orderId', (req, res) => {
  res.send('Ok');
});

// Delete/cancel order
router.delete('/order/:orderId', (req, res) => {
  res.send('Ok');
});
