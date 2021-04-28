/**
 * BannersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    const query = {};
    if (req.query.category) {
      query.category = req.query.category;
    }
    const data = await Banner.find(query);
    res.json({ code: 1, data });
  },
};
