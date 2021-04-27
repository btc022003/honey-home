/**
 * ActivityLogsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async reg(req, res) {
    // const body = req.body
    await ActivityLog.create(req.body);
    res.json({
      code: 1,
      msg: "报名成功",
    });
  },
};
