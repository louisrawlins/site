
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Louis Rawlins' })
};

exports.bio = function(req, res){
  res.render('bio', { title: 'Louis Rawlins, Bio' })
};

exports.resume = function(req, res){
  res.render('resume', { title: 'Louis Rawlins, Resume' })
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Louis Rawlins, Contact' })
};
