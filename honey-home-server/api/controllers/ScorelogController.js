/**
 * ScorelogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async info(req, res) {
    const data = await ScoreLog.find({
      user: req.query.user,
    }).populate("user");
    res.json({
      code: 1,
      data,
    });
  },
};
