const express = require('express'); // Express é uma framework Node, usado no back-end, que efetua as rotas.
const bodyParser = require('body-parser'); //Este vai deixar aceder ao Body das requisições e permitirá usar os dados que forem inseridos.
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost', // O endereço da conexão (localhost).
  user     : 'pap_joaocorreia', // O nome de utilizador da base de dados.
  password : 'CKzS1vgu2Hgmkxjz', //A senha da base de dados
  database : 'pap_joaocorreia' // O nome da base de dados.
});

// Isso ainda é no routes.js! Logo abaixo dos outros códigos.
// Iniciando o app.
const app = express();

// Criando uma rota GET que retorna os dados da tabela usuários.
app.get('/users', function (req, res) {
    // Conectando ao banco.
    connection.getConnection(function (err, connection) {
    
    // Executando a query MySQL (selecionar todos os dados da tabela usuário).
    connection.query('SELECT * FROM Utilizador', function (error, results, fields) {
      // Caso ocorra algum erro, não irá executar corretamente.if (error) throw error;
      
      // Pegando a 'resposta' do servidor pra nossa requisição. Ou seja, aqui ele vai mandar nossos dados.
      res.send(results)
    });
  });
});

// Iniciando o servidor.
app.listen(3000, () => {
 console.log('Vai no navegador e entra em http://localhost:3000/Utilizador pra ver os usuários cadastrados.');
});
