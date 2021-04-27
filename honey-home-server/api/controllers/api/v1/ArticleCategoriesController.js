/**
 * ArticleCategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    const data = await ArticleCategory.find();
    res.json({
      code: 1,
      data,
    });
  },
};
