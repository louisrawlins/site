
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
app.get('/contact', routes.contact);
app.get('/portfolio', routes.portfolio);
app.get('/articles', routes.articles);

// Routes to articles
app.get('/articles/lean-life', routes.leanLife);

// Routes to redirects
// No more redirects -- 10/5/15 10:45 AM
// app.get('/blog', function(req, res){ res.redirect(process.env.NODE_ENV ? 'http://blog.louisrawlins.com' : 'http://localhost:3001') });
// app.get('/portfolio', function(req, res){ res.redirect(process.env.NODE_ENV ? 'http://portfolio.louisrawlins.com' : 'http://localhost:3002') });

// Choose port 8080 if we're on NODE_ENV (`% export NODE_ENV=production` to set on server)
// app.listen(process.env.NODE_ENV ? 8080 : 3000);
app.listen(8080);