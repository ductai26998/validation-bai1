var db = require('../db');
const shortid = require('shortid');

module.exports.get = (request, response) => {
  response.render('books/index', {
    books: db.get('books').value()
  });
};

module.exports.search = (request, response) => {
  var q = request.query.q;
  var matchedBooks = db.get('books').value().filter(function(book) {
    return book.title.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  response.render('books/index', {
    books: matchedBooks
  });
};

module.exports.create = (request, response) => {
  response.render('books/create');
};

module.exports.postCreate = (request, response) => {
  request.body.bookId = shortid.generate();
  db.get('books').push(request.body).write();
  response.redirect('/');
};

module.exports.delete = (request, response) => {
  db.get('books').remove(request.params).write();
  response.redirect('/');
};

module.exports.update = (request, response) => {
  response.render('books/update', {bookId: request.params.bookId});
};

module.exports.postUpdate = (request, response) => {
  var bookId = request.params.bookId;
  db.get('books')
    .find({bookId: bookId})
    .assign({title: request.body.title})
    .write();
  response.redirect('/');
}