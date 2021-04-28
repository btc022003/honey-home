/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async info(req, res) {
    const data = await Cart.find({
      user: req.query.user,
    })
      .populate("user")
      .populate("product");
    res.json({
      code: 1,
      data,
    });
  },
};
