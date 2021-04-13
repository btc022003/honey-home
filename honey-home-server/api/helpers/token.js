const jwt = require('jsonwebtoken');

module.exports = {
  friendlyName: 'Token',

  description: 'Token something.',

  inputs: {
    user: {
      type: 'ref',
    },
  },

  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function ({ user }) {
    // TODO
    return jwt.sign(user, sails.config.custom.jwtSecret, {
      expiresIn: '10h',
    });
  },
};
