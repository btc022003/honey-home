/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async login(req, res) {
    //
    const user = await User.findOne({
      userName: req.body.userName,
    }).decrypt();
    if (user) {
      if (user.password === req.body.password) {
        res.json({
          code: 1,
          data: await sails.helpers.token(user),
        });
      } else {
        res.json({
          code: 0,
          data: " 密码错误",
        });
      }
    } else {
      res.json({
        code: 0,
        data: "用户信息不存在",
      });
    }
  },

  async reg(req, res) {
    //
    const user = await User.create({
      // console.log()
      userName: req.body.userName,
      password: req.body.password,
      nickName: req.body.nickName,
      gender: req.body.gender,
      avatar: req.body.avatar,
      age: req.body.age,
      area: req.body.area,
      address: req.body.address,
      birthday: req.body.birthday,
    }).fetch(); // 创建完成之后返回当前值
    console.log(user);
    if (user) {
      res.json({
        code: 1,
        data: await sails.helpers.token(user),
      });
    }
  },

  async managerLogin(req, res) {
    const user = await Manager.findOne({
      userName: req.body.userName,
    }).decrypt();
    if (user) {
      if (user.password === req.body.password) {
        res.json({
          code: 1,
          data: await sails.helpers.token(user),
        });
      } else {
        res.json({
          code: 0,
          data: " 密码错误",
        });
      }
    } else {
      res.json({
        code: 0,
        data: "用户信息不存在",
      });
    }
  },

  async managerInfo(req, res) {
    res.json(req.user);
  },
};
