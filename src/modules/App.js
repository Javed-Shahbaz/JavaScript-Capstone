import getData from './ApiSimpson.js';
import iconLike from '../assests/like.png';

// Render cards
async function renderCards() {
  // Data from simpson api
  const data = await getData();
  const CardsContainer = document.getElementById('dinamic-content');

  data.forEach((episode) => {
    const doc = document;
    const article = doc.createElement('article');
    article.classList.add('card');
    const image = doc.createElement('img');
    image.classList.add('thumbnail-image');
    image.src = episode.thumbnailUrl;
    image.alt = 'thumbnail image';
    const divName = doc.createElement('div');
    divName.classList.add('cont-name-like');
    const pName = doc.createElement('p');
    pName.classList.add('episode');
    pName.textContent = episode.name;
    const divLike = doc.createElement('div');
    divLike.classList.add('cont-like');
    const imgLike = doc.createElement('img');
    imgLike.src = iconLike;
    imgLike.classList.add('like');
    imgLike.alt = 'like button';
    const pNroLike = doc.createElement('p');
    pNroLike.classList.add('n-likes');
    const spanNro = doc.createElement('span');
    spanNro.classList.add('nro-like');
    spanNro.textContent = '5 ';
    pNroLike.textContent = 'likes #';
    pNroLike.appendChild(spanNro);
    const btnCmts = doc.createElement('button');
    btnCmts.classList.add('comments');
    btnCmts.textContent = 'Comments';
    divLike.appendChild(imgLike);
    divLike.appendChild(pNroLike);
    divName.appendChild(pName);
    divName.appendChild(divLike);
    article.appendChild(image);
    article.appendChild(divName);
    article.appendChild(btnCmts);

    CardsContainer.appendChild(article);
  });
}

const App = () => {
  renderCards();
};

export default App;