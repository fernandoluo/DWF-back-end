
const express = require('express');
const router = express.Router();
const VendaController = require('../controllers/venda/VendaController');


router.post('/vendas', VendaController.adicionarVenda);


router.get('/vendas', VendaController.listarVendas);


router.get('/vendas/:id', VendaController.listarVendaFiltro);


router.put('/vendas/:id', VendaController.atualizarInformacoesVenda);


router.delete('/vendas/:id', VendaController.removerVenda);

module.exports = router;
