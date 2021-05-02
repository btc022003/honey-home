module.exports = {
  friendlyName: "Page",

  description: "Page something.",

  inputs: {
    model: {
      type: "ref",
      description: "the model for query",
      required: true,
    },
    query: {
      type: "ref",
      description: "the  query params",
      required: true,
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async function ({ model, query }) {
    // console.log(model);
    // TODO
    let page = 1;
    let per = 10;
    const total = await model.count(query);
    // console.log(totals);
    const data = await model
      .find(query)
      .skip((page - 1) * per)
      .limit(per)
      .populate("category") // 查询关联数据
      .sort("id DESC");
    return {
      total,
      data,
    };
  },
};
