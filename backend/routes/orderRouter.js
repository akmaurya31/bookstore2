import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModels.js';
//import Product from '../models/productModel';
import { isAdmin, isAuth } from '../util.js';

// import { generateToken, isAuth } from '../util.js';

const orderRouter = express.Router();

orderRouter.post(
  '/',isAuth,
  expressAsyncHandler(async (req, res) => {

    console.log("the ord000000000000000000000000jjj", req.body)

    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: 'Cart is empty' });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.kitemsPrice,
        shippingPrice: req.body.kshippingPrice,
        taxPrice: req.body.ktaxPrice,
        totalPrice: req.body.orderItemsT,
        user: req.user._id,
      });
      console.log("the order is fdf jjjjjj", order)
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: 'New Order Created', order: createdOrder });
    }
  })
);

orderRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

orderRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate('user', 'name');
    res.send(orders);
  })
);

export default orderRouter;