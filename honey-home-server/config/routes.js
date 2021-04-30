/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
const path = require("path");
const fs = require("fs");
module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": { view: "pages/homepage" },
  "GET /uploads/:id": {
    skipAssets: false,
    fn: [
      (req, res) => {
        try {
          const fileName = path.join(
            path.resolve("./.tmp/uploads/"),
            req.params.id
          );

          if (fs.existsSync(fileName)) {
            res.sendFile(fileName);
          } else {
            res.notFound();
          }
        } catch (err) {
          res.notFound();
        }
      },
    ],
  },
  "POST /api/v1/common/upload_file": { action: "api/v1/common/uploadFile" },
  "GET /api/v1/banners": { action: "api/v1/banners/index" },
  "GET /api/v1/notices": { action: "api/v1/notices/index" },
  "GET /api/v1/notices/:id": { action: "api/v1/notices/detail" },
  "GET /api/v1/article_categories": {
    action: "api/v1/articleCategories/index",
  },
  "GET /api/v1/articles": { action: "api/v1/articles/index" },
  "GET /api/v1/articles/:id": { action: "api/v1/articles/detail" },
  "GET /api/v1/activity_categories": {
    action: "api/v1/activityCategories/index",
  },
  "GET /api/v1/activity_categories": {
    action: "api/v1/activityCategories/index",
  },
  "GET /api/v1/activities": { action: "api/v1/activities/index" },
  "GET /api/v1/activities/:id": { action: "api/v1/activities/detail" },
  "POST /api/v1/activity_logs": { action: "api/v1/activityLogs/reg" },

  "GET /api/v1/forums": { action: "api/v1/forums/index" },
  "GET /api/v1/posts": { action: "api/v1/posts/index" },
  "GET /api/v1/posts/hot": { action: "api/v1/posts/hot" },
  "GET /api/v1/posts/fresh": { action: "api/v1/posts/fresh" },
  "GET /api/v1/posts/:id": { action: "api/v1/posts/detail" },
  "POST /api/v1/posts": { action: "api/v1/posts/create" },
  "GET /api/v1/comments/:post_id": { action: "api/v1/comments/index" },
  "POST /api/v1/comments/:post_id": { action: "api/v1/comments/create" },

  "GET /api/v1/product_categories": {
    action: "api/v1/productCategories/index",
  },
  "GET /api/v1/products": { action: "api/v1/products/index" },
  "GET /api/v1/products/:id": { action: "api/v1/products/detail" },
  "GET /api/v1/product_comments/:product_id": {
    action: "api/v1/productComments/index",
  },
  "POST /api/v1/product_comments/:product_id": {
    action: "api/v1/productComments/create",
  },
  "GET /api/v1/shop_carts": {
    action: "api/v1/shopCarts/index",
  },
  "POST /api/v1/shop_carts": {
    action: "api/v1/shopCarts/create",
  },
  "DELETE /api/v1/shop_carts/:cart_id": {
    action: "api/v1/shopCarts/remove",
  },

  "GET /api/v1/orders": {
    action: "api/v1/orders/index",
  },
  "GET /api/v1/orders/:id": {
    action: "api/v1/orders/detail",
  },
  "POST /api/v1/orders": {
    action: "api/v1/orders/create",
  },

  "PUT /api/v1/user/update_pwd": {
    action: "api/v1/user/updatePWD",
  },
  "PUT /api/v1/user/modify": {
    action: "api/v1/user/modify",
  },
  "POST /api/v1/user/check_in": {
    action: "api/v1/user/checkIn",
  },
  "GET /api/v1/user/info": {
    action: "api/v1/user/info",
  },

  "POST /api/v1/auth/login": { action: "api/v1/auth/login" },
  "POST /api/v1/auth/reg": { action: "api/v1/auth/reg" },
  "POST /api/v1/auth/manager_login": { action: "api/v1/auth/managerLogin" },
  "GET /api/v1/auth/manager_info": { action: "api/v1/auth/managerInfo" },
  "/api/v1/admin/*": [
    {
      policy: "isAdminLogined",
    },
  ],

  "GET /api/v1/admin/cart/info": { action: "cart/info" },
  "GET /api/v1/admin/scorelog/info": { action: "scorelog/info" },
  "PUT /api/v1/admin/post/check": { action: "post/check" },
  "POST /api/v1/admin/post/delete_many": { action: "post/deleteMany" },
  "POST /api/v1/admin/comment/delete_many": { action: "comment/deleteMany" },
  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
