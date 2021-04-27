/**
 * NoticesController
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
    const total = await Notice.count(query); // 查询数量
    // 查询数据
    const data = await Notice.find(query)
      .skip((page - 1) * per)
      .limit(per)
      .sort("id DESC");
    res.json({
      code: 1,
      total,
      pages: Math.ceil(total / per),
      data,
    });
  },
  async detail(req, res) {
    const data = await Notice.findOne({ id: req.params.id });
    if (data) {
      res.json({ code: 1, data });
    } else {
      res.json({
        code: 0,
        msg: "暂无数据",
      });
    }
  },
};
