const API_KEY = "3b03a74a34a146a2acdbd7fdaed9bbc2";
const BASE_URL = "https://newsapi.org/v2";
const listaDeNoticias = document.querySelector("#listaDeNoticias")

//Acessando as notícias
async function getNews() {
  const response = await fetch(`${BASE_URL}/top-headlines?country=pt`, {
    method: "GET",
    headers:{
      "X-Api-Key": API_KEY,
    }
  });

  const data = await response.json();
  console.log(data);

  //Acessando artigos para o card
  data.articles.forEach((article) => {
    const card = 
      `<div class="col-3">
        <div class="card">
          <img src="${article.urlToImage}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${article.description}</p>
            <a href="${article.url}" class="btn btn-primary">Ler mais</a>
          </div>
        </div>
      </div>`;

  listaDeNoticias.insertAdjacentHTML("beforeend", card);
  })
}

getNews();