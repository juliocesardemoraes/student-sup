const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema(
  {
    id: Number,
    titulo: String,
    num_paginas: Number,
    isbn: String,
    editora: String,
  },
  {
    timestamps: true,
  }
);

const LivroModel = mongoose.model("livros", livroSchema);

module.exports = { LivroModel };
