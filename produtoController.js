const Produto = require('../../models/produto/Produto');

class ProdutoController {

  
  async adicionarProduto(req, res) {
    const { nome, descricao, preco, categoria, estoque } = req.body;
    try {
      console.log('Dados recebidos:', req.body);
      const novoProduto = await Produto.create({ nome, descricao, preco, categoria, estoque });
      console.log('Produto criado com sucesso:', novoProduto);
      res.status(201).json(novoProduto);
    } catch (error) {
      console.error('Erro ao criar o produto:', error);
      res.status(500).json({ error: 'Erro ao criar o produto', descricao: error.message });
    }
  }

  
  async listarProdutos(req, res) {
    try {
      const produtos = await Produto.findAll();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }

  
  async listarProdutoFiltro(req, res) {
    const { id } = req.params; 

    
    if (!id) {
      return res.status(400).json({ error: 'O ID do produto é um parâmetro obrigatório.' });
    }

    try {
      
      const produto = await Produto.findOne({ where: { id } });

      
      if (!produto) {
        return res.status(404).json({ message: 'Nenhum produto encontrado com o ID fornecido.' });
      }

      res.status(200).json(produto);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produto', descricao: error.message });
    }
  }

  
  async atualizarInformacoesProduto(req, res) {
    const { id } = req.params;
    const { nome, descricao, preco, categoria, estoque } = req.body;

    try {
      await Produto.update({ nome, descricao, preco, categoria, estoque }, { where: { id } });
      res.status(202).json({ message: 'Produto atualizado com sucesso!' });
    } catch (error) {
      console.error('Erro ao atualizar informações do produto:', error);
      res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  }

  
  async removerProduto(req, res) {
    const { id } = req.params;

    try {
      await Produto.destroy({ where: { id } });
      res.status(202).json({ message: 'Produto removido com sucesso.' });
    } catch (error) {
      console.error('Erro ao remover produto:', error);
      res.status(500).json({ error: 'Erro ao remover produto' });
    }
  }
}

module.exports = new ProdutoController();
