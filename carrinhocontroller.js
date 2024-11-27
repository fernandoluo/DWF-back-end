const Carrinho = require('../../models/carrinho/Carrinho');
const Produto = require('../../models/produto/Produto');

class CarrinhoController {
  
  
  async adicionarProdutoCarrinho(req, res) {
    const { clienteId, produtoId, quantidade } = req.body;

    try {
      
      const produto = await Produto.findByPk(produtoId);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
      }

      /
      const itemCarrinho = await Carrinho.findOne({ where: { clienteId, produtoId } });
      
      if (itemCarrinho) {
       
        itemCarrinho.quantidade += quantidade;
        await itemCarrinho.save();
        return res.status(200).json(itemCarrinho);
      }

     
      const novoItemCarrinho = await Carrinho.create({ clienteId, produtoId, quantidade });
      res.status(201).json(novoItemCarrinho);

    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
      res.status(500).json({ error: 'Erro ao adicionar produto ao carrinho', descricao: error.message });
    }
  }

  
  async listarCarrinho(req, res) {
    const { clienteId } = req.params;
    
    try {
      const itensCarrinho = await Carrinho.findAll({ where: { clienteId }, include: Produto });
      
      if (itensCarrinho.length === 0) {
        return res.status(404).json({ message: 'Carrinho vazio.' });
      }

      res.status(200).json(itensCarrinho);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produtos no carrinho', descricao: error.message });
    }
  }

  
  async atualizarQuantidadeProdutoCarrinho(req, res) {
    const { clienteId, produtoId } = req.params;
    const { quantidade } = req.body;

    try {
      
      const itemCarrinho = await Carrinho.findOne({ where: { clienteId, produtoId } });
      
      if (!itemCarrinho) {
        return res.status(404).json({ error: 'Produto não encontrado no carrinho.' });
      }

      itemCarrinho.quantidade = quantidade;
      await itemCarrinho.save();

      res.status(200).json(itemCarrinho);
    } catch (error) {
      console.error('Erro ao atualizar a quantidade do produto:', error);
      res.status(500).json({ error: 'Erro ao atualizar quantidade', descricao: error.message });
    }
  }

  
  async removerProdutoCarrinho(req, res) {
    const { clienteId, produtoId } = req.params;

    try {
      const itemCarrinho = await Carrinho.findOne({ where: { clienteId, produtoId } });

      if (!itemCarrinho) {
        return res.status(404).json({ error: 'Produto não encontrado no carrinho.' });
      }

      await itemCarrinho.destroy();

      res.status(202).json({ message: 'Produto removido do carrinho com sucesso.' });
    } catch (error) {
      console.error('Erro ao remover produto do carrinho:', error);
      res.status(500).json({ error: 'Erro ao remover produto do carrinho', descricao: error.message });
    }
  }
}

module.exports = new CarrinhoController();
