const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <form action = "/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.get("/testes/:idUsuarios?/:parametros?", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Recebi o seu form com a seguinte informação: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
