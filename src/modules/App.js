import { getData, countOccurrences } from './ApiSimpson.js';
import iconLike from '../assests/like.png';
import getLikes from './GetLikes.js';
import sendLike from './SendLike.js';
import { addComment } from './addComments.js';
import { API_URL1 } from './Vars.js';
import getComments from './GetComments.js';

// Render cards
async function renderCards() {
  // Data from simpson api
  const data = await getData(API_URL1);
  const CardsContainer = document.getElementById('dinamic-content');

  const nLikesArray = await Promise.all(
    data.map((episode) => getLikes(episode.id)),
  );
  data.forEach((episode, index) => {
    const nLikes = nLikesArray[index];

    // data.forEach((episode) => {
    // for (const episode of data) {
    // const nLikes = await getLikes(episode.id);
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
    spanNro.textContent = nLikes;
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
    // Detect the clik on like
    imgLike.addEventListener('click', async () => {
      const itemId = episode.id;
      const nLikes = await getLikes(itemId);
      const output = await sendLike(itemId);
      if (output) {
        spanNro.textContent = nLikes + 1;
      } else {
        spanNro.textContent = 'error';
      }
    });
    const popup = doc.getElementById('popup');
    btnCmts.addEventListener('click', async () => {
      popup.classList.add('show');
      document.getElementById('img-popup').src = episode.thumbnailUrl;
      document.querySelector('.popup-name').textContent = episode.name;
      document.getElementById('ep-number').textContent = episode.episode;
      document.getElementById('desc').textContent = episode.description;
      document.querySelector('.addForm').setAttribute('id', `${episode.id}`);
      getComments(`${episode.id}`);
    });
  });
}

const frmAddComment = document.getElementById('addCommentBtn');
frmAddComment.addEventListener('click', async (event) => {
  event.preventDefault();
  const name = document.querySelector('.inputname').value;
  const comment = document.querySelector('#inputcomments').value;
  const itemId = document.querySelector('#addCommentBtn').parentElement.id;
  if (name !== "" && comment !== "") {
    const commentObj = JSON.stringify({
      item_id: itemId,
      username: name,
      comment: comment,
    });

    await addComment(commentObj);
    getComments(`${itemId}`);
    document.querySelector('.inputname').value = "";
    document.querySelector('#inputcomments').value = "";
  }
});

const cbtn = document.getElementById('cross-btn');
cbtn.addEventListener('click', () => {
  popup.classList.remove('show');
});

const displayCountItems = async () => {
  const nro = await countOccurrences();
  document.getElementById('nro').innerHTML = nro;
};

const App = () => {
  renderCards();
  displayCountItems();
};

export default App;