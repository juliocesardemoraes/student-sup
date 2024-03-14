class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
  }

  Adicionar() {
    let produto = this.lerDados();
    if (this.Validar(produto) == true) {
      this.Salvar(produto);
    }
    this.lerDados();
    this.Cancelar();
  }

  lerDados() {
    let produto = {};

    produto.id = this.id;
    produto.nomeProduto = document.getElementById("pdnome").value;
    produto.precoProduto = document.getElementById("pdpreco").value;

    return produto;
  }

  Validar(produto) {
    let msg = "";

    if (produto.nomeProduto == "") {
      msg += "Por favor, insira corretamente o nome do produto! \n";
    }

    if (produto.precoProduto == "") {
      msg += "Por favor, insira corretamente o preço do produto! \n";
    }
    if (msg != "") {
      alert(msg);
      return false;
    }

    return true;
  }

  Salvar(produto) {
    this.arrayProdutos.push(produto);
    this.id++;
  }
}

const produto = new Produto();
