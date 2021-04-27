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
};
