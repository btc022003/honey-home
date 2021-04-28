/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async modify(req, res) {
    const data = {};
    if (req.body.nickName) {
      data.nickName = req.body.nickName;
    }
    if (req.body.gender) {
      data.gender = req.body.gender;
    }
    if (req.body.avatar) {
      data.avatar = req.body.avatar;
    }
    if (req.body.age) {
      data.age = req.body.age;
    }
    if (req.body.area) {
      data.area = req.body.area;
    }
    if (req.body.address) {
      data.address = req.body.address;
    }
    if (req.body.birthday) {
      data.birthday = req.body.birthday;
    }
    await User.updateOne({
      id: req.user.id,
    }).set(data);
    res.json({
      code: 1,
      msg: "修改个人信息成功",
    });
  },
  async updatePWD(req, res) {
    const user = req.user;
    if (user.password == req.body.oldPassword) {
      await User.updateOne({
        id: user.id,
      }).set({
        password: req.body.password,
      });
      res.json({
        code: 1,
        msg: "修改密码成功",
      });
    } else {
      res.json({
        code: 0,
        msg: "原始密码输入错误",
      });
    }
  },
  async checkIn(req, res) {
    await ScoreLog.create({
      user: req.user.id,
      score: 1,
      remarks: "每日签到获取积分",
    });
    await User.updateOne({
      id: req.user.id,
    }).set({
      score: req.user.score + 1,
    });
    res.json({
      code: 1,
      msg: "签到成功",
    });
  },
  async info(req, res) {
    res.json({ code: 1, data: req.user });
  },
};
