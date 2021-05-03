/**
 * CommentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // async find(req, res) {
  //   const query = {};
  //   let page = 1;
  //   let per = 10;
  //   if (req.query.page) {
  //     page = req.query.page * 1;
  //   }
  //   if (req.query.per) {
  //     per = req.query.per * 1;
  //   }
  //   if (req.query.content) {
  //     query.content = { contains: req.query.content }; // 模糊匹配
  //   }
  //   if (req.query.is_checked) {
  //     query.isChecked = req.query.is_checked;
  //   }
  //   if (req.query.post) {
  //     query.post = req.query.post;
  //   }
  //   //
  //   const total = await Comment.count(query); // 查询数量
  //   // 查询数据
  //   const data = await Comment.find(query)
  //     .skip((page - 1) * per)
  //     .limit(per)
  //     .populate("post")
  //     .populate("user")
  //     .sort("id DESC");
  //   // const result = await sails.helpers.page(Article, query);
  //   res.json({
  //     code: 1,
  //     total,
  //     pages: Math.ceil(total / per),
  //     data,
  //   });
  // },
  // async deleteMany(req, res) {
  //   await Comment.destroy({
  //     id: {
  //       id: req.body.ids,
  //     },
  //   });
  //   res.json({
  //     code: 1,
  //     msg: "删除成功",
  //   });
  // },
};
