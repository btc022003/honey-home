/**
 * CommentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    const query = { post: req.params.post_id }; // 返回所有审核过的帖子
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

    const total = await Comment.count(query); // 查询数量
    // 查询数据
    const data = await Comment.find(query)
      .skip((page - 1) * per)
      .limit(per)
      .populate("user")
      // .populate("post")
      .sort("id DESC");
    // const result = await sails.helpers.page(Article, query);
    res.json({
      code: 1,
      total,
      pages: Math.ceil(total / per),
      data,
    });
  },

  async create(req, res) {
    await Comment.create({
      post: req.params.post_id,
      ...req.body,
      user: req.user.id,
    });
    res.json({
      code: 1,
      msg: "评论成功",
    });
  },
};
