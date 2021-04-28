/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    price: {
      type: "number",
      defaultsTo: 1,
    },
    address: {
      type: "string",
      defaultsTo: "",
    },
    receiver: {
      type: "string",
      defaultsTo: "",
    },
    payStatus: {
      type: "number",
      defaultsTo: 0,
      columnName: "pay_status",
    },
    orderStatus: {
      type: "number",
      defaultsTo: 0,
      columnName: "order_status",
    },
    user: {
      model: "User",
    },
    details: {
      collection: "OrderDetail",
      via: "order",
    },
  },
  tableName: "orders",
  schema: true, // 如果需要查询指定的字段，需要设置这个
};
