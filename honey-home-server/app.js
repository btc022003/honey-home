/**
 * app.js
 *
 * Use `app.js` to run your app without `sails lift`.
 * To start the server, run: `node app.js`.
 *
 * This is handy in situations where the sails CLI is not relevant or useful,
 * such as when you deploy to a server, or a PaaS like Heroku.
 *
 * For example:
 *   => `node app.js`
 *   => `npm start`
 *   => `forever start app.js`
 *   => `node debug app.js`
 *
 * The same command-line arguments and env vars are supported, e.g.:
 * `NODE_ENV=production node app.js --port=80 --verbose`
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/app.js
 */

// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually lift from.
// > Note: This is not required in order to lift, but it is a convenient default.
process.chdir(__dirname);

const axios = require("axios").default;

// Attempt to import `sails` dependency, as well as `rc` (for loading `.sailsrc` files).
var sails;
var rc;
try {
  sails = require("sails");
  rc = require("sails/accessible/rc");
  // 生命周期钩子函数
  sails.on("lifted", async () => {
    initDbData(); // 初始化数据
    initManager(); // 初始化超级管理源信息
  });
} catch (err) {
  console.error("Encountered an error when attempting to require('sails'):");
  console.error(err.stack);
  console.error("--");
  console.error(
    "To run an app using `node app.js`, you need to have Sails installed"
  );
  console.error(
    "locally (`./node_modules/sails`).  To do that, just make sure you're"
  );
  console.error("in the same directory as your app and run `npm install`.");
  console.error();
  console.error(
    "If Sails is installed globally (i.e. `npm install -g sails`) you can"
  );
  console.error(
    "also run this app with `sails lift`.  Running with `sails lift` will"
  );
  console.error(
    "not run this file (`app.js`), but it will do exactly the same thing."
  );
  console.error(
    "(It even uses your app directory's local Sails install, if possible.)"
  );
  return;
} //-•

// Start server
sails.lift(rc("sails"));

//
async function initDbData() {
  //  如果没有商品数据，那么进行抓取
  const pc = await ProductCategory.count({});
  const p = await Product.count({});
  console.log(pc, p);
  if (pc == 0 && p == 0) {
    initCategories();
  }
}

async function initManager() {
  const adminExists = await Manager.count({ userName: "admin" });
  if (adminExists === 0) {
    await Manager.create({
      userName: "admin",
      password: "admin",
      nickName: "Arivin",
      avatar: "http://oss.penkuoer.com/uPic/ss.jpeg",
    });
  }
}

const categories = [
  {
    id: 1,
    name: "雕塑手办",
    link:
      "https://apps.game.qq.com/daoju/v3/zb/client/goods/GoodsApp.php?output_format=json&biz=lolriotmall&page_no=1&page_size=50&order_by=iRecRank&sort=desc&jsonpName=goodsListApi&opt_type=goods_list&cat_tag_id=101&cat_tag_type=cat&channel=2",
    img:
      "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201712/20171205200207_77656.big.jpg",
  },
  {
    id: 2,
    name: "毛绒玩偶",
    link:
      "https://apps.game.qq.com/daoju/v3/zb/client/goods/GoodsApp.php?output_format=json&biz=lolriotmall&page_no=1&page_size=199&order_by=iRecRank&sort=desc&jsonpName=goodsListApi&opt_type=goods_list&cat_tag_id=119&cat_tag_type=cat&channel=2",
    img:
      "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202101/20210120214843_39472.big.jpg",
  },
  {
    id: 3,
    name: "男女服饰",
    link:
      "https://apps.game.qq.com/daoju/v3/zb/client/goods/GoodsApp.php?output_format=json&biz=lolriotmall&page_no=1&page_size=199&order_by=iRecRank&sort=desc&jsonpName=goodsListApi&opt_type=goods_list&cat_tag_id=120&cat_tag_type=cat&channel=2",
    img:
      "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202104/20210409175934_45107.big.jpg",
  },
  {
    id: 4,
    name: "生活周边",
    link:
      "https://apps.game.qq.com/daoju/v3/zb/client/goods/GoodsApp.php?output_format=json&biz=lolriotmall&page_no=1&page_size=199&order_by=iRecRank&sort=desc&jsonpName=goodsListApi&opt_type=goods_list&cat_tag_id=665&cat_tag_type=cat&channel=2",
    img:
      "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202101/20210118181726_94604.big.jpg",
  },
];

async function loadProducts(lmfl) {
  const c = categories.find((item) => item.name == lmfl.name);
  const res = await axios.get(c.link);
  console.log(c.link);
  const products = res.data.data.list.map((item) => {
    return {
      name: item.sMallName,
      price: item.iPrice / 100,
      coverImage: item.sProfileImg,
      amount: item.iSoldNum,
      category: lmfl.id,
      content: "lmzb-" + item.iMallId,
    };
  });
  // console.log(products);
  await Product.createEach(products);
  loadDetailInfo();
}

async function loadDetailInfo() {
  const products = await Product.find({
    content: { contains: "lmzb-" },
  });
  for (let i = 0; i < products.length; i++) {
    const res = await axios
      .get(
        "https://apps.game.qq.com/daoju/v3/zb/client/goods/GoodsApp.php?output_format=json&opt_type=goods_detail&biz=lolriotmall&mall_id=" +
          products[i].content.replace("lmzb-", "")
      )
      .catch((err) => console.log(err));
    let strContent = res.data.data.list.sMallDesc.replace(
      new RegExp("//shp", "g"),
      "http://shp"
    );

    await Product.updateOne({ id: products[i].id }).set({
      content: strContent,
    });
    console.log("修复详情数据成功");
  }
  console.log("修复所有详情数据成功");
}

async function initCategories() {
  const lmfz = categories.map((item) => {
    return {
      name: item.name,
      coverImage: item.img,
      desc: "lmzb",
    };
  });
  await ProductCategory.destroy({ desc: "lmzb" });
  await ProductCategory.createEach(lmfz);
  const lmfl = await ProductCategory.find({ desc: "lmzb" });
  for (var i = 0; i < lmfl.length; i++) {
    await loadProducts(lmfl[i]);
  }
}
