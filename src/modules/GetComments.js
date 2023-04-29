import { API_URL2, AppId } from './Vars.js';
import { getData } from './ApiSimpson.js';
import countComments from './countComments';

const getComments = async (itemId) => {
  const comments = document.getElementById('comments');
  comments.innerHTML = ` 
  <h3>Comments <span class="comment_count">(0)</span></h3>
  `
  const url = `${API_URL2}apps/${AppId}/comments?item_id=${itemId}`;
  const movieComments = await getData(url);

  if (movieComments.length > 0) { 
    countComments(itemId);
    document.querySelector('.comment_count').textContent = `(${movieComments.length})`;
    movieComments.forEach((comment) => {
      const pComments = document.createElement('p');
      pComments.innerHTML = `
          <small>${comment.creation_date} - ${comment.username}:</small> <strong>${comment.comment}</strong>
       `;
      comments.appendChild(pComments);
    });
  }
};

export default getComments;