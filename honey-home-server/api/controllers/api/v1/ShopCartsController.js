/**
 * ShopCartsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create(req, res) {
    const cart = await ShopCart.find({
      user: req.user.id,
      product: req.body.product,
    });
    if (cart) {
      let amount = req.body.amount * 1;
      if (amount > 0 || cart.amount - amount * 1 > 0) {
        ShopCart.updateOne({
          id: cart.id,
        }).set({
          amount: cart.amount + amount,
        });
      }
    } else {
      if (req.body.amount * 1 > 0) {
        await ShopCart.create({
          product: req.body.product,
          amount: req.body.amount,
          price: req.body.price,
          user: req.user.id,
        });
      }
    }
    res.json({
      code: 1,
      msg: "加入购物车成功",
    });
  },
  async remove(req, res) {
    await ShopCart.destroyOne({ id: req.params.cart_id, user: req.user.id });
    res.json({
      code: 1,
      msg: "删除购物车成功",
    });
  },
};
