const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal para servir o index.html
app.get('/teste', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'teste.html'));
});

// Rota principal para servir o index.html
app.get('/terapeuta', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'terapeuta.html'));
});

// Rota adicional para servir o cliente.html
app.get('/cliente', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cliente.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
