var db = require('../db');
const shortid = require('shortid');

module.exports.get = (request, response) => {
  response.render('transactions/index', {
    transactions: db.get('transactions').value(),
    getUserById: function(userId) {
      return db.get('users').find({ id: userId }).value();
    },
    getBookById: function(bookId) {
      return db.get('books').find({ id: bookId }).value()
    },
  });
};

module.exports.create = (request, response) => {
  response.render("transactions/create", {
    users: db.get('users').value(),
    books: db.get('books').value()
  })
};

module.exports.postCreate = (request, response) => {
  request.body.id = shortid.generate();
  request.body.isComplete = "false";
  db.get('transactions').push(request.body).write();
  response.redirect('/');
};

module.exports.complete = (request, response) => {
  response.render('transactions/complete', {
    id: request.params.id
  });
};

module.exports.postComplete = (request, response) => {
  var id = request.params.id;
  db.get('transactions')
    .find({id: id})
    .assign({isComplete: request.body.isComplete})
    .write();
  response.redirect('/');
};

