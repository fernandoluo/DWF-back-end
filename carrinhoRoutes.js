const express = require('express');
const router = express.Router();
const CarrinhoController = require('../../controllers/carrinho/CarrinhoController');

router.post('/carrinho', CarrinhoController.adicionarItemCarrinho);
router.get('/carrinho', CarrinhoController.listarItensCarrinho);
router.get('/carrinho/:id', CarrinhoController.listarItensCarrinhoFiltro);
router.put('/carrinho/:id', CarrinhoController.atualizarItemCarrinho);
router.delete('/carrinho/:id', CarrinhoController.removerItemCarrinho);

module.exports = router;
