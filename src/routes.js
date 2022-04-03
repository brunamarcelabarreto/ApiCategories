const express = require ('express');
const mongoose = require ('mongoose');
const routes = express.Router();

const CategoryController = require ('./controllers/CategoryController');
const ProductController = require ('./controllers/ProductController');

routes.get('/category', CategoryController.index); 
routes.get('/category/:id', CategoryController.show);
routes.post('/category', CategoryController.store); 
routes.put('/category/:id', CategoryController.update); 
routes.delete('/category/:id', CategoryController.destroy);

routes.get('/product', ProductController.index); 
routes.get('/product/:id', ProductController.show);
routes.post('/product', ProductController.store); 
routes.put('/product/:id', ProductController.update); 
routes.delete('/product/:id', ProductController.destroy);

module.exports = routes; 