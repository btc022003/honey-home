module.exports = async (req, res, next) => {
  // console.log(req.cookies);
  // console.log('police is running');
  // 写一个简单的权限守卫判断
  if (req.headers.token) {
    try {
      // 根据token获取用户信息
      const user = await sails.helpers.decodeToken(req.headers.token);
      req.user = await User.findOne({ userName: user.userName }).decrypt();
      // console.log(user);
      if (req.user) {
        return next();
      } else {
        return res.status(401).json({
          code: 0,
          info: '请先登录',
        });
      }
    } catch (err) {
      // console.log(err);
      return res.status(401).json({
        code: 0,
        info: '请先登录',
      });
    }
  } else {
    return res.status(401).json({
      code: 0,
      info: '请先登录',
    });
  }
  // next();
};
