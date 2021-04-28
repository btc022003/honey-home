/**
 * ProductcommentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async find(req, res) {
    const query = {};
    let page = 1;
    let per = 10;
    if (req.query.page) {
      page = req.query.page * 1;
    }
    if (req.query.per) {
      per = req.query.per * 1;
    }
    if (req.query.product) {
      query.product = product;
    }
    const total = await ProductComment.count(query); // 查询数量
    // 查询数据
    const data = await ProductComment.find(query)
      .skip((page - 1) * per)
      .limit(per)
      .populate("product")
      .populate("user")
      .sort("id DESC");
    // const result = await sails.helpers.page(Article, query);
    res.json({
      code: 1,
      total,
      pages: Math.ceil(total / per),
      data,
    });
  },
};
