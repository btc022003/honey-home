/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions, unless overridden.       *
   * (`true` allows public access)                                            *
   *                                                                          *
   ***************************************************************************/
  // '*': true,
  // 指定action使用police验证
  "api/v1/activityLogs/reg": "isLogined",
  "api/v1/posts/create": "isLogined",
  "api/v1/comments/create": "isLogined",
  "api/v1/productComments/create": "isLogined",
  "api/v1/shopCarts/index": "isLogined",
  "api/v1/shopCarts/create": "isLogined",
  "api/v1/shopCarts/remove": "isLogined",
  "api/v1/orders/index": "isLogined",
  "api/v1/orders/detail": "isLogined",
  "api/v1/orders/create": "isLogined",
  "api/v1/user/modify": "isLogined",
  "api/v1/user/checkIn": "isLogined",
  "api/v1/user/updatePWD": "isLogined",
  "api/v1/user/info": "isLogined",
  "api/v1/auth/managerInfo": "isAdminLogined",
};
