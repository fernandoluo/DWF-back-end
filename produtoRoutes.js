const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produto/ProdutoController');

// Rotas para Produtos
router.post('/produtos', ProdutoController.adicionarProduto);
router.get('/produtos', ProdutoController.listarProdutos);
router.get('/produtos/:id', ProdutoController.listarProdutoFiltro);
router.put('/produtos/:id', ProdutoController.atualizarInformacoesProduto);
router.delete('/produtos/:id', ProdutoController.removerProduto);

module.exports = router;
