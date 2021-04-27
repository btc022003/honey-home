/**
 * PostsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    const query = { isChecked: 1 }; // 返回所有审核过的帖子
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
    if (req.query.forum) {
      query.forum = req.query.forum; // 模糊匹配
    }
    const total = await Post.count(query); // 查询数量
    // 查询数据
    const data = await Post.find(query)
      .skip((page - 1) * per)
      .limit(per)
      .populate("forum")
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
  async detail(req, res) {
    const data = await Post.findOne({ id: req.params.id });

    if (data) {
      await Post.updateOne({ id: data.id }).set({
        views: data.views + 1,
      });
      res.json({
        code: 1,
        data,
      });
    } else {
      res.json({
        code: 0,
        msg: "暂无数据",
      });
    }
  },
  async create(req, res) {
    await Post.create({
      ...req.body,
      user: req.user.id,
    });
    res.json({
      code: 1,
      msg: "发帖成功",
    });
  },
  async hot(req, res) {
    let nums = 10;
    if (req.query.nums) {
      nums = req.query.nums * 1;
    }
    const data = await Post.find()
      .limit(nums)
      .populate("forum")
      .populate("user")
      .sort("views DESC");
    res.json({
      code: 1,
      data,
    });
  },
  async fresh(req, res) {
    let nums = 10;
    if (req.query.nums) {
      nums = req.query.nums * 1;
    }
    const data = await Post.find()
      .limit(nums)
      .populate("forum")
      .populate("user")
      .sort("id DESC");
    res.json({
      code: 1,
      data,
    });
  },
};
