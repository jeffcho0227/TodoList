const express = require('express');
const Router = express.Router();
const controller = require('./controller.js');

Router
  .route('/list')
  .get(controller.findAllHelper)

module.exports = Router