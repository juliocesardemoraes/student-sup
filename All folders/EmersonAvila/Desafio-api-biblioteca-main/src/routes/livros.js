const express = require("express");
const connectDB = require("../middlewares/connectDB");
const handleExpectedError = require("../functions/handleExpectedErrors");
const esquemaLivros = require("../models/livros");
const router = express.Router();

router.post("/cadastro", connectDB, async function (req, res) {
  try {
    // #swagger.tags = ['Livros']
    let { id, titulo, num_paginas, isbn, editora } = req.body;

    console.log("livroid", req.body);

    const respostaDB = await esquemaLivros.create({
      id,
      titulo,
      num_paginas,
      isbn,
      editora,
    });

    return res.status(200).json({
      status: "OK",
      statusMensagem: "Livro cadastrado com sucesso!",
      resposta: respostaDB,
    });
  } catch (error) {
    console.log("ERROR", error);
    if (String(error).includes("duplicate key erro")) {
      return handleExpectedError(res, "Error: Este livro já está cadastrado");
    }
    return handleExpectedError(res, error);
  }
});

router.put("/editar/:id", connectDB, async function (req, res) {
  try {
    // #swagger.tags = ['Livros']
    let idLivro = req.params.id;

    let { id, titulo, num_paginas, isbn, editora } = req.body;

    const checkLivro = await esquemaLivros.findOne({ id: idLivro });
    if (!checkLivro) {
      throw new Error("Este livro não foi encontrado!");
    }

    const livroAtualizado = await esquemaLivros.updateOne(
      { id: idLivro },
      {
        id,
        titulo,
        num_paginas,
        isbn,
        editora,
      }
    );
    if (livroAtualizado?.modifiedCount > 0) {
      const dadosLivro = await esquemaLivros.findOne({ id: idLivro });

      res.status(200).json({
        status: "OK",
        statusMensagem: "Livro atualizado com sucesso!",
        resposta: dadosLivro,
      });
    }
  } catch (error) {
    return handleExpectedError(res, error);
  }
});

router.get("/obter/livros", connectDB, async function (req, res) {
  try {
    // #swagger.tags = ['Livros']
    // #swagger.description = 'Endpoint para obter todas os livros.'

    const respostaDB = await esquemaLivros.find({});

    res.status(200).json({
      status: "OK",
      statusMensagem: "Livros listados com sucesso!",
      resposta: respostaDB,
    });
  } catch (error) {
    return handleExpectedError(res, error);
  }
});

router.get("/obter/livros/:id", connectDB, async function (req, res) {
  try {
    // #swagger.tags = ['Livros']

    let idLivro = req.params.id;
    console.log(idLivro);

    const respostaDB = await esquemaLivros.findOne({ id: idLivro });

    if (!respostaDB) {
      throw new Error("Este livro não foi encontrado!");
    }

    res.status(200).json({
      status: "OK",
      statusMensagem: "Livro listado com sucesso!",
      resposta: respostaDB,
    });
  } catch (error) {
    return handleExpectedError(res, error);
  }
});

router.delete("/deletar/:id", connectDB, async function (req, res) {
  try {
    // #swagger.tags = ['Livros']
    const idLivro = req.params.id;

    const checkLivro = await esquemaLivros.findOne({ id: idLivro });
    if (!checkLivro) {
      throw new Error("Este livro não foi encontrado!");
    }

    const respostaDB = await esquemaLivros.deleteOne({ id: idLivro });

    res.status(200).json({
      status: "OK",
      statusMensagem: "Livro deletado com sucesso!",
      resposta: respostaDB,
    });
  } catch (error) {
    return handleExpectedError(res, error);
  }
});

module.exports = router;
