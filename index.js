var path = require('path');
var express = require('express');
var expressLayouts = require('./lib/express-layouts');
var route = require('./routes/route'); // Nizam
var route_1 = require('./routes/route_1'); // Nizam
var route_2 = require('./routes/route_2'); // Bongsu
var route_3 = require('./routes/route_3'); // Danial
var route_4 = require('./routes/route_4'); // Rafif

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

app.use(expressLayouts);
app.use('/', route);
app.use('/route_1', route_1);
app.use('/route_2', route_2);
app.use('/route_3', route_3);
app.use('/route_4', route_4);

var port = 3000;
app.listen(port, function() {
  console.log('Listening on http://localhost:%s/', port);
});
