const express = require('express');
const router = express.Router();

const controller = require('./controller.js');

router
  .route('/api')
  .post(controller.post)

router
  .route('/api/:id')
  .get(controller.get)
  .put(controller.update);

module.exports = router;