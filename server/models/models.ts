import  mongoose, { Document } from 'mongoose';


const shopSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: String,
  products: [
    {
      id: { type: String, required: true },
      name: String,
      price: Number,
      quantity: Number,
      img: String
    },
  ],
});

export const Shop = mongoose.model('Shop', shopSchema);

interface Order extends Document {
  shop: mongoose.Types.ObjectId;
  products: mongoose.Types.ObjectId[];
  email: string;
  phoneNumber: string;
  address: string;
  name: string;
}

const orderSchema = new mongoose.Schema({
  shop: { type: mongoose.Types.ObjectId, ref: 'Shop' },
  products: [{ type: mongoose.Types.ObjectId, ref: 'Product' }],
  email: String,
  phoneNumber: String,
  address: String,
  name: String,
});

export const Order = mongoose.model<Order>('Order', orderSchema);
