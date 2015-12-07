'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
  secure: true,
  port: process.env.PORT || 8443,
  db: {
      uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || '',
    options: {
      user: '',
      pass: ''
    },
    imageServer: {
      key: process.env.S3_KEY,
      secret: process.env.S3_SECRET,
      bucket: process.env.S3_BUCKET
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
    app: {
        title: defaultEnvConfig.app.title
    }
};
