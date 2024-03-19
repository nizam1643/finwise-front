var express = require('express');
var router = express.Router();

router.get('/example', function(req, res) {
  res.locals = {
    title: 'Example',
  };
  res.render('./route_1/example', { layout: 'partials/dashboard_layout' });
});

module.exports = router;
