const chamarNewsApi = async (pesquisa = "bitcoin") => {
  const apiKey = "860a8d4ec19441ab9b2a67d9385abf85";
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=${pesquisa}&apiKey=${apiKey}`
  );
  const dataJson = await data.json();
  return dataJson.articles;
};

const renderCards = (data) => {
  const articleDiv = document.getElementById("articles");
  articleDiv.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const anchor = document.createElement("a");
    anchor.href = data[i].url;
    anchor.setAttribute("target", "_blank");

    const card = document.createElement("div");
    const cardText = document.createElement("div");

    card.classList.add("flex", "gap-1", "align-center");

    const h2Title = document.createElement("h2");
    h2Title.innerText = data[i].title;
    cardText.append(h2Title);

    const paragraph = document.createElement("p");
    paragraph.innerText = data[i].description;
    cardText.append(paragraph);

    const imageContainer = document.createElement("img");
    imageContainer.src = data[i].urlToImage;

    card.append(imageContainer, cardText);
    anchor.append(card);
    articleDiv.append(anchor);
  }
};

(async () => {
  const data = await chamarNewsApi(); // 1 - 2 seg
  renderCards(data);
})();

const verificarMudanca = async (e) => {
  const data = await chamarNewsApi(e); // 1 - 2 seg
  renderCards(data);
};
