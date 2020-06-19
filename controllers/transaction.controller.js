var db = require('../db');

module.exports.get = (request, response) => {
  response.render('transactions/index', {
    transactions: db.get('transactions').value()
  });
};

module.exports.create = (request, response) => {
  response.render("transactions/create", {
    users: db.get('users').value(),
    books: db.get('books').value()
  })
};

module.exports.postCreate = (request, response) => {
  
  db.get('transactions').push(request.body).write();
  response.redirect('/');
};