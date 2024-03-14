class Calculadora {
  constructor() {
    this.valor1 = document.getElementById("valor1");
    this.valor2 = document.getElementById("valor2");
    this.showResult = document.getElementById("resultado");
  }

  Calculate() {
    let val1 = Number(this.valor1.value);
    let val2 = Number(this.valor2.value);

    if (val1 == 0 || val2 == 0) {
      window.alert("Insira valores pra realizar o calculo");
    } else {
      let value = this._GetOperation();
      let result = 0;

      switch (value) {
        case "adic":
          result = val1 + val2;
          this.showResult.innerHTML = `O resultado da adição foi <b>${result}<b>.`;
          break;
        case "subt":
          result = val1 - val2;
          this.showResult.innerHTML = `O resultado da subtração foi <b>${result}<b>.`;
          break;
        case "mult":
          result = val1 * val2;
          this.showResult.innerHTML = `O resultado da multiplicação foi <b>${result}<b>.`;
          break;
        case "divi":
          result = val1 / val2;
          this.showResult.innerHTML = `O resultado da divisão foi <b>${result}<b>.`;
          break;
      }
    }
  }

  _GetOperation() {
    let operacao = document.getElementById("operacao");
    let valor = operacao.value;

    return valor;
  }
}

const handleCalculo = () => {
  const calculo = new Calculadora();
  calculo.Calculate();
};
