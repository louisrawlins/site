
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { pretty: true });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes to views

app.get('/', routes.index);
app.get('/resume', routes.resume);
app.get('/contact', routes.contact);

// Routes to redirects

app.get('/blog', function(req, res){ res.redirect(process.env.JOYENT ? 'http://blog.louisrawlins.com' : 'http://localhost:3001') });
app.get('/portfolio', function(req, res){ res.redirect(process.env.JOYENT ? 'http://portfolio.louisrawlins.com' : 'http://localhost:3002') });

// Choose port 80 if we're on Joyent (`% export JOYENT=1` to set on server, `echo $JOYENT` to check)
app.listen(process.env.JOYENT ? 80 : 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
