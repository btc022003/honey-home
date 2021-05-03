/**
 * OrderController
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
    if (req.query.user) {
      const userIds = await User.find({
        userName: { contains: req.query.user },
      }).select(["id"]);
      // console.log(userIds);
      query.user = { in: userIds.map((item) => item.id) };
    }
    if (req.query.name) {
      query.name = { contains: req.query.name }; // 模糊匹配
    }
    if (req.query.orderStatus) {
      query.orderStatus = req.query.orderStatus;
    }
    if (req.query.payStatus) {
      query.payStatus = req.query.payStatus;
    }
    const total = await Order.count(query); // 查询数量
    // 查询数据
    const data = await Order.find(query)
      .skip((page - 1) * per)
      .limit(per)
      .populate("user")
      .populate("details")
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
