/**
 * ActivitiesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    const query = {};
    let page = 1;
    let per = 10;
    if (req.query.page) {
      page = req.query.page * 1;
    }
    if (req.query.per) {
      per = req.query.per * 1;
    }
    if (req.query.name) {
      query.name = { contains: req.query.name }; // 模糊匹配
    }
    if (req.query.category) {
      query.category = req.query.category; // 模糊匹配
    }
    const total = await Activity.count(query); // 查询数量
    // 查询数据
    const data = await Activity.find(query)
      .skip((page - 1) * per)
      .limit(per)
      .populate("category")
      .sort("id DESC");
    res.json({
      code: 1,
      total,
      pages: Math.ceil(total / per),
      data,
    });
  },
  async detail(req, res) {
    const data = await Activity.findOne({ id: req.params.id });
    if (data) {
      res.json(data);
    } else {
      res.json({
        code: 0,
        msg: "暂无数据",
      });
    }
  },
};
