function addCards() {
  var cards = [
    {
      title: "Desafio 1 - Calculadora",
      content:
        "Crie uma calculadora que possa realizar operações básicas como adição, subtração, multiplicação e divisão.",
      url: "desafios/1_Calculadora/calculadora.html",
    },
  ];

  for (let clist = 0; clist < cards.length; clist++) {
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img class="image__background" src='./images/fundoDiv.jpg'></img>
    <h4> ${cards[clist].title} </h4><p>  ${cards[clist].content}  </p>`;
    card.addEventListener("click", function () {
      window.location.href = cards[clist].url;
    });
    document.querySelector(".card-list").appendChild(card);
  }
}

window.onload = addCards;
