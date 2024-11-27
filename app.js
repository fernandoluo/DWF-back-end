const express = require('express');
const app = express();


app.use(express.json());


app.use('/api/clientes', (req, res) => {
    if (req.method === 'POST') {
        res.status(201).json({ message: 'Cliente criado com sucesso!' });
    } else if (req.method === 'GET') {
        res.status(200).json({ message: 'Listando todos os clientes!' });
    } else if (req.method === 'DELETE') {
        res.status(200).json({ message: 'Cliente deletado com sucesso!' });
    } else {
        res.status(405).json({ message: 'Método não permitido!' });
    }
});


app.use('/api/produtos', (req, res) => {
    if (req.method === 'POST') {
        res.status(201).json({ message: 'Produto criado com sucesso!' });
    } else if (req.method === 'GET') {
        res.status(200).json({ message: 'Listando todos os produtos!' });
    } else if (req.method === 'DELETE') {
        res.status(200).json({ message: 'Produto deletado com sucesso!' });
    } else {
        res.status(405).json({ message: 'Método não permitido!' });
    }
});


app.use('/api/carrinho', (req, res) => {
    if (req.method === 'POST') {
        res.status(201).json({ message: 'Item adicionado ao carrinho com sucesso!' });
    } else if (req.method === 'GET') {
        res.status(200).json({ message: 'Listando itens do carrinho!' });
    } else if (req.method === 'DELETE') {
        res.status(200).json({ message: 'Item removido do carrinho com sucesso!' });
    } else {
        res.status(405).json({ message: 'Método não permitido!' });
    }
});


app.use('/api/vendas', (req, res) => {
    if (req.method === 'POST') {
        res.status(201).json({ message: 'Venda registrada com sucesso!' });
    } else if (req.method === 'GET') {
        res.status(200).json({ message: 'Listando todas as vendas!' });
    } else if (req.method === 'DELETE') {
        res.status(200).json({ message: 'Venda deletada com sucesso!' });
    } else {
        res.status(405).json({ message: 'Método não permitido!' });
    }
});


module.exports = app;
