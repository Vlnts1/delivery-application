import { Request, Response } from 'express';
import { Order, Shop } from '../models/models';
const mongoose = require('mongoose');


export const getAllShops = async (req: Request, res: Response): Promise<void> => {
  try {
    const { shopId } = req.params;

    const products = await Shop.find({ shopId });

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
  };

  
  export const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
      const { shopId, productIds, email, phoneNumber, address, name } = req.body;
  
      const order = new Order({
        shop: shopId,
        products: productIds,
        email,
        phoneNumber,
        address,
        name,
      });
  
      await order.save();
  
      res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ message: 'Failed to create order' });
    }
  };

  export default {
    getAllShops,
    createOrder
  };
  