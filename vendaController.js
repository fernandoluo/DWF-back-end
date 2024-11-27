
const Venda = require('../../models/venda/Venda');

class VendaController {
  
  
  async adicionarVenda(req, res) {
    const { cliente_id, produto_id, quantidade, preco_total } = req.body;
    try {
      console.log('Dados recebidos:', req.body);
      const novaVenda = await Venda.create({ cliente_id, produto_id, quantidade, preco_total });
      console.log('Venda criada com sucesso:', novaVenda);
      res.status(201).json(novaVenda);
    } catch (error) {
      console.error('Erro ao criar a venda:', error);
      res.status(500).json({ error: 'Erro ao criar a venda', descricao: error.message });
    }
  }

  
  async listarVendas(req, res) {
    try {
      const vendas = await Venda.findAll();
      res.status(200).json(vendas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar Vendas' });
    }
  }

  
  async listarVendaFiltro(req, res) {
    const { id } = req.params; 

    
    if (!id) {
      return res.status(400).json({ error: 'O id é um parâmetro obrigatório.' });
    }

    try {
     
      const vendas = await Venda.findAll({ where: { cliente_id: id } });

      
      if (vendas.length === 0) {
        return res.status(404).json({ message: 'Nenhuma venda encontrada para o cliente ou produto fornecido.' });
      }

      res.status(200).json(vendas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar Vendas', descricao: error.message });
    }
  }

  
  async atualizarInformacoesVenda(req, res) {
    const { id } = req.params;
    const { cliente_id, produto_id, quantidade, preco_total } = req.body;

    try {
      await Venda.update({ cliente_id, produto_id, quantidade, preco_total }, { where: { id } });
      res.status(202).json({ message: 'Venda atualizada com sucesso!' });
    } catch (error) {
      console.error('Erro ao atualizar informações da venda:', error);
      res.status(500).json({ error: 'Erro ao atualizar venda' });
    }
  }

  
  async removerVenda(req, res) {
    const { id } = req.params;

    try {
      await Venda.destroy({ where: { id } });
      res.status(202).json({ message: 'Venda removida com sucesso.' });
    } catch (error) {
      console.error('Erro ao remover venda:', error);
      res.status(500).json({ error: 'Erro ao remover venda' });
    }
  }
}

module.exports = new VendaController();
