const Cliente = require('../../models/cliente/Cliente');

class ClienteController {
  
  
  async adicionarCliente(req, res) {
    const { nome, email, senha, genero, data, pais } = req.body;
    try {
      console.log('Dados recebidos:', req.body);
      const novoCliente = await Cliente.create({ nome, email, senha, genero, data, pais });
      console.log('Cliente criado com sucesso:', novoCliente);
      res.status(201).json(novoCliente);
    } catch (error) {
      console.error('Erro ao criar o cliente:', error);
      res.status(500).json({ error: 'Erro ao criar o cliente', descricao: error.message });
    }
  }

  
  async listarCliente(req, res) {
    try {
      const clientes = await Cliente.findAll();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar Clientes' });
    }
  }

  
  async listarClienteFiltro(req, res) {
    const { id } = req.params; 

    
    if (!id) {
      return res.status(400).json({ error: 'O email é um parâmetro obrigatório.' });
    }

    try {
     
      const clientes = await Cliente.findAll({ where: { id } });

      
      if (clientes.length === 0) {
        return res.status(404).json({ message: 'Nenhum cliente encontrado com o email fornecido.' });
      }

      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar Clientes', descricao: error.message });
    }
  }

  
  async atualizarInformacoesCliente(req, res) {
    const { id } = req.params;
    const { nome, email, endereco, bairro, tipo_cliente } = req.body;
    
    try {
      await Cliente.update({ nome, email, endereco, bairro, tipo_cliente }, { where: { id } });
      res.status(202).json({ message: 'Cliente atualizado com sucesso!' });
    } catch (error) {
      console.error('Erro ao atualizar informações do cliente:', error);
      res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
  }


  async removerCliente(req, res) {
    const { id } = req.params;
    
    try {
      await Cliente.destroy({ where: { id } });
      res.status(202).json({ message: 'Cliente removido com sucesso.' });
    } catch (error) {
      console.error('Erro ao remover cliente:', error);
      res.status(500).json({ error: 'Erro ao remover cliente' });
    }
  }
}

module.exports = new ClienteController();
