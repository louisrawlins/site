
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Louis Rawlins' })
};

exports.resume = function(req, res){
  res.render('resume', { title: 'Resume - Louis Rawlins' })
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact - Louis Rawlins' })
};

exports.portfolio = function(req, res){
  res.render('portfolio', { title: 'Portfolio - Louis Rawlins' })
};

exports.articles = function(req, res){
  res.render('articles', { title: 'Articles - Louis Rawlins' })
};

exports.leanLife = function(req, res){
  res.render('articles/lean-life', { title: 'Lean Life - Louis Rawlins' })
};
