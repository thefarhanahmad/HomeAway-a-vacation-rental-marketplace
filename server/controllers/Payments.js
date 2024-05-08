const Razorpay = require("razorpay");

// creating instance
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

// creating order
const createOrder = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: Math.random(Date.now()).toString(),
    };

    const order = await instance.orders.create(options);
    res.status(200).json({
      message: "Order created successfully",
      orderId: order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

module.exports = { createOrder };
