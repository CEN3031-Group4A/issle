'use strict';

module.exports = {
  secure: true,
  port: process.env.PORT || 8443,
  db: {
      uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || '',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  app: {
      title: defaultEnvConfig.app.title
  }
};
