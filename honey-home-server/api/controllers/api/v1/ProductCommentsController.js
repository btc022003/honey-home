/**
 * ProductCommentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    const data = await ProductComment.find({
      product: req.params.product_id,
    }).populate("user");
    res.json({
      code: 1,
      data,
    });
  },
  async create(req, res) {
    await ProductComment.create({
      ...req.body,
      product: req.params.product_id,
      user: req.user.id,
    });
    res.json({
      code: 1,
      msg: "评论发布成功",
    });
  },
};
