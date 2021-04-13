const jwt = require('jsonwebtoken');

module.exports = {
  friendlyName: 'Decode token',

  description: '',

  inputs: {
    token: {
      type: 'string',
    },
  },

  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function ({ token }) {
    // TODO
    return jwt.verify(token, sails.config.custom.jwtSecret);
  },
};
