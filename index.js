// Importar o Express
const express = require('express');
// Criar uma instância do Express
const app = express();
// Definir a porta (3000 é padrão para Node.js)
const port = 3000;

// Rota Raiz (URL: http://localhost:3000/)
app.get('/', (req, res) => {
  res.send('Bem-vindo à Pizzaria do Programador! 🍕');
});

// Lista estática de pizzas (nosso "banco de dados" temporário)
const pizzas = [
  { 
    id: 1,
    nome: "Margherita",
    ingredientes: ["molho de tomate", "mozzarella", "manjericão"],
    preco: 45.90
  },
  { 
    id: 2,
    nome: "Pepperoni",
    ingredientes: ["molho de tomate", "mozzarella", "pepperoni"],
    preco: 55.50
  },
  { 
    id: 3,
    nome: "Quatro Queijos",
    ingredientes: ["mozzarella", "gorgonzola", "parmesão", "catupiry"],
    preco: 60.00
  }
];

// Rota para listar todas as pizzas (URL: http://localhost:3000/pizzas)
app.get('/pizzas', (req, res) => {
  res.json(pizzas); // Retorna a lista de pizzas em formato JSON
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});