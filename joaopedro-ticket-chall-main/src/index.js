const express = require("express");
const cors = require("cors");
const { connectToMongo } = require("./config/connect");
const { LivroModel } = require("./livros/livro");

connectToMongo();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  return res.status(200).json({ server: "working" });
});

app.post("/livros", async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ message: "O campo ID e obrigtório" });
  }
  if (!req.body.titulo) {
    return res.status(400).json({ message: "O campo titulo e obrigtório" });
  }
  if (!req.body.num_paginas) {
    return res.status(400).json({ message: "O campo paginas e obrigtório" });
  }
  if (!req.body.isbn) {
    return res.status(400).json({ message: "O campo ISBN e obrigtório" });
  }
  if (!req.body.editora) {
    return res.status(400).json({ message: "O campo editora e obrigtório" });
  }

  const livroExisente = await LivroModel.find({
    id: req.body.id,
    titulo: req.body.titulo,
  });
  if (livroExisente.length) {
    return res.status(200).json({ message: "Livro ou ID Exisente" });
  }

  const livro = await LivroModel.create({
    id: req.body.id,
    titulo: req.body.titulo,
    num_paginas: req.body.num_paginas,
    isbn: req.body.isbn,
    editora: req.body.editora,
  });

  return res.status(201).json(livro);
});

app.get("/livros", async (req, res) => {
  const livros = await LivroModel.find({});
  return res.status(200).json(livros);
});

app.get("/livros/:id", async (req, res) => {
  try {
    const livro = await LivroModel.findOne({ id: req.params.id });
    return res.status(200).json(livro);
  } catch (erro) {
    return res.status(400).json({
      data: [],
      message: "Não foi possivel encontrar ID",
    });
  }
});

app.put("/livros/:id", async (req, res) => {
  const livro = await LivroModel.updateOne({ id: req.params.id }, req.body);

  return res.status(200).json(livro);
});

app.delete("/livros/:id", async (req, res) => {
  const livro = await LivroModel.deleteOne({ id: req.params.id });

  return res.status(200).json({
    data: livro,
  });
});

app.listen(8080, () => {
  console.log("servidor Funcionando na porta 8080");
});

module.exports = app;
