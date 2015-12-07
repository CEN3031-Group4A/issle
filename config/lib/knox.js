/**
 * Created by Raz Aloni on 12/5/2015.
 */

'use strict';

/**
 * Module dependencies.
 */
var config = require('../config'),
    knox = require('knox');

module.exports.connect = function() {
    module.exports.knoxClient = knox.createClient(config.imageServer);
};

