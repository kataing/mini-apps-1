const express = require('express');
const router = express.Router();

const controller = require('./controller.js');

router
  .route('/api')
  .get(controller.get)
  .post(controller.post)
  .put(controller.update);

module.exports = router;