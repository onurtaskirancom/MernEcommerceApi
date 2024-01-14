import asyncHandler from 'express-async-handler';
import Order from '../model/Order.js';
import Product from '../model/Product.js';
import User from '../model/User.js';

//@desc create orders
//@route POST /api/v1/orders
//@access private

export const createOrderCtrl = asyncHandler(async (req, res) => {
  //Get the payload(customer, orderItems, shipppingAddress, totalPrice);
  const { orderItems, shippingAddress, totalPrice } = req.body;
  console.log(req.body);
  //Find the user
  const user = await User.findById(req.userAuthId);
  //Check if user has shipping address
  if (!user?.hasShippingAddress) {
    throw new Error('Please provide shipping address');
  }
  //Check if order is not empty
  if (orderItems?.length <= 0) {
    throw new Error('No Order Items');
  }
  //Place/create order - save into DB
  const order = await Order.create({
    user: user?._id,
    orderItems,
    shippingAddress,
    // totalPrice: couponFound ? totalPrice - totalPrice * discount : totalPrice,
    totalPrice,
  });

  //Update the product qty
  const products = await Product.find({ _id: { $in: orderItems } });

  orderItems?.map(async (order) => {
    const product = products?.find((product) => {
      return product?._id?.toString() === order?._id?.toString();
    });
    if (product) {
      product.totalSold += order.qty;
    }
    await product.save();
  });
  //push order into user
  user.orders.push(order?._id);
  await user.save();
  //make payment (stripe)
  // payment webhook
  //Update the user order
  res.json({
    success: true,
    message: 'Order Created',
    order,
    user,
  });
});
