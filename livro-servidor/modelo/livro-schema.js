const mongoose = require('./conexao');

const LivroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  paginas: Number,
  ano: Number
});

const Livro = mongoose.model('Livro', LivroSchema, 'livros');

module.exports = Livro;