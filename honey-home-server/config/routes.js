/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

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
  "GET /api/v1/notices": { action: "api/v1/notices/index" },
  "GET /api/v1/notices/:id": { action: "api/v1/notices/detail" },
  "GET /api/v1/article_categories": {
    action: "api/v1/articleCategories/index",
  },
  "GET /api/v1/articles": { action: "api/v1/articles/index" },
  "GET /api/v1/articles/:id": { action: "api/v1/articles/detail" },
  "/api/v1/admin/*": [
    {
      // policy: "isAdminLogined",
    },
  ],
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
