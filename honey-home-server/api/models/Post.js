/**
 * Post.js
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
    name: {
      type: "string",
      required: true, // 必填
    },
    coverImage: {
      type: "string",
      columnName: "cover_image", // 数据库中存储的字段名
      defaultsTo: "",
    },
    desc: {
      type: "string",
      defaultsTo: "",
    },
    content: {
      type: "string",
      defaultsTo: "",
    },
    views: {
      type: "number",
      defaultsTo: 1,
    },
    isChecked: {
      type: "number",
      defaultsTo: 1,
      columnName: "is_checked",
    },
    //is_checked
    forum: {
      model: "Forum",
    },
    user: {
      model: "User",
    },
    comments: {
      collection: "Comment",
      via: "post",
    },
  },
  tableName: "posts",
  schema: true, // 如果需要查询指定的字段，需要设置这个
};
