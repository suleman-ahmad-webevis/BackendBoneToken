const Cart = require("../models/cart");

const handleErrors = (err) => {
  const error = {};

  if (err.message.includes("cart validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};

const addtoCart = async function (req, res) {
  const { quantity, name, price } = req.body;
  const productId = req.params.id;

  const userId = "62e223ca8194374b03fed8ac"; //the logged in user id

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      //cart exists for user
      let product = cart.products.findIndex((p) => p.productId == productId);

      if (product > -1) {
        //product exists in the cart, update the quantity
        let productItem = cart.products[product];
        productItem.quantity += quantity;
        productItem.price += price;
        cart.products[product] = productItem;
      } else {
        //product does not exists in cart, add new item
        cart.products.push({ productId, quantity, name, price });
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      //no cart for user, create new cart
      const newCart = await Cart.create({
        userId,
        products: [{ productId, quantity, name, price }],
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    const error = handleErrors(err);
    res.send(error);
  }
};

module.exports = {
  addtoCart,
};
