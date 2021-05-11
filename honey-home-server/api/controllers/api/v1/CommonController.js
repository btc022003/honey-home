/**
 * CommonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const path = require("path");
module.exports = {
  // 文件上传功能，上传之后需要吧uploads目录设置成静态资源目录
  uploadFile: function (req, res) {
    req.file("file").upload({}, (err, files) => {
      if (err) {
        return res.serverError(err);
      }
      // console.log(files[0]);
      return res.json({
        code: 1,
        data: "/uploads/" + path.basename(files[0].fd),
      });
    });
  },
};
