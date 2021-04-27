/**
 * ActivityCategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    const data = await ActivityCategory.find();
    res.json({
      code: 1,
      data,
    });
  },
};
