const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao');

// Rota para obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await livroDao.obterLivros();
    res.json(livros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
  try {
    const livro = await livroDao.incluir(req.body);
    res.status(201).json(livro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para excluir um livro pelo código (_id)
router.delete('/:id', async (req, res) => {
  try {
    await livroDao.excluir(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;