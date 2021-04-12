/**
 * User.js
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
    userName: {
      type: "string",
      required: true,
      unique: true,
      columnName: "user_name",
    },
    password: {
      type: "string",
      encrypt: true,
    },
    nickName: {
      type: "string",
      defaultsTo: "",
      columnName: "nick_name",
    },
    gender: {
      type: "string",
      defaultsTo: "未知",
    },
    avatar: {
      type: "string",
      defaultsTo: "",
    },
    address: {
      type: "string",
      defaultsTo: "",
    },
    area: {
      type: "string",
      defaultsTo: "",
    },
    isLocked: {
      type: "number",
      columnName: "is_locked",
      defaultsTo: 0,
    },
    score: {
      type: "number",
      defaultsTo: 0,
    },
    age: {
      type: "number",
      defaultsTo: 0,
    },
    birthday: {
      type: "string",
      defaultsTo: "",
    },
  },
  tableName: "users",
  schema: true, // 如果需要查询指定的字段，需要设置这个
};
