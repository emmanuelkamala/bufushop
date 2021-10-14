import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true, },
  products: [
    {
      productId: { type: String },
      quantity: { type: Number, default: 1 }
    }
  ]
}, 
  { timestamps: true }
)

const Order = mongoose.model('Order', OrderSchema);

export default Order;