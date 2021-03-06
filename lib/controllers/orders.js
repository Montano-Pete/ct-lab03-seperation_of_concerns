const { Router } = require('express');
const Order = require('../models/Order');
const OrderService = require('../services/OrderService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const order = await OrderService.createOrder(req.body);

      res.send(order);
    } catch(err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const order = await Order.getAll();
      
      res.send(order);
    } catch(err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const order = await Order.getById(id);

      res.send(order);
    } catch(err) {
      next(err);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const updatedOrder = await OrderService.updateOrder(req);

      res.send(updatedOrder);
    } catch(err) {
      next(err);
    }
  })
  
  .delete('/:id', async (req, res, next) => {
    try {
      const deletedOrder = await OrderService.deleteOrder(req);

      res.send(deletedOrder);
    } catch(err) {
      next(err);
    }
  });
