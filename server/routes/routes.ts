import { Router } from 'express';
import productController from '../controllers/productController';

const router = Router();

router.get('/shops', productController.getAllShops);

router.post('/orders', productController.createOrder);


export default router;
