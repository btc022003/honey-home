/**
 * OrdersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    const query = { user: req.user.id };
    let page = 1;
    let per = 10;
    if (req.query.page) {
      page = req.query.page * 1;
    }
    if (req.query.per) {
      per = req.query.per * 1;
    }
    if (req.query.pay_status) {
      query.pay_status = req.query.pay_status;
    }
    if (req.query.order_status) {
      query.order_status = req.query.category;
    }
    const total = await Order.count(query); // 查询数量
    // 查询数据
    const data = await Order.find(query)
      .skip((page - 1) * per)
      .limit(per)
      .populate("user")
      .populate("details")
      .sort("id DESC");
    const pids = [];
    data.forEach((item) => {
      item.details.forEach((od) => pids.push(od.product));
    });
    const products = await Product.find({
      id: {
        in: pids,
      },
    });
    data.forEach((item) => {
      item.details.forEach((od) => {
        od.product = products.find((i) => i.id == od.product);
      });
    });
    // const result = await sails.helpers.page(Article, query);
    res.json({
      code: 1,
      total,
      pages: Math.ceil(total / per),
      data,
    });
  },
  async detail(req, res) {
    const data = await Order.findOne({ user: req.user.id, id: req.params.id })
      .populate("user")
      .populate("details");
    const pids = [];
    data.details.forEach((item) => pids.push(item.product));
    const products = await Product.find({
      id: {
        in: pids,
      },
    });

    data.details.forEach((od) => {
      od.product = products.find((i) => i.id == od.product);
    });

    if (data) {
      res.json({ code: 1, data });
    } else {
      res.json({
        code: 0,
        msg: "暂无数据",
      });
    }
  },
  async create(req, res) {
    if (req.body.products.length > 0) {
      let sumPrice = 0;
      // 购物车中的商品id单独拼接成数组
      const pids = req.body.products.map((item) => item.product);
      // const ods = [];
      //
      // 获取购物车中的商品信息
      const products = await Product.find({ id: { in: pids } });
      // 计算总价
      sumPrice = products.reduce((pre, cur) => {
        return (
          pre +
          cur.price *
            req.body.products.find((item) => item.product == cur.id).amount
        );
      }, 0);
      const order = await Order.create({
        user: req.user.id,
        receiver: req.body.receiver,
        address: req.body.address,
        price: sumPrice,
      }).fetch();
      // 购物车商品信息
      const ods = products.map((p) => {
        const pSubData = req.body.products.find((item) => item.product == p.id);
        return {
          product: pSubData.product,
          amount: pSubData.amount,
          price: p.price,
          order: order.id,
        };
      });
      // 添加购物车详情
      await OrderDetail.createEach(ods);
      // 删除用户已经提交的购物车中的商品信息
      await Cart.destroy({
        user: req.user.id,
        product: {
          in: pids,
        },
      });
      res.json({
        code: 1,
        msg: "提交订单成功",
      });
    }
  },
};
