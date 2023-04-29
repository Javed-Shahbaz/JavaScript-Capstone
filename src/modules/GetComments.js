// import { API_URL2, AppId } from './Vars.js';
import { getData } from './ApiSimpson.js';

const getComments = async (itemId) => {
  const comments = document.getElementById('comments');
  comments.innerHTML = "";
  const url = `${API_URL2}apps/${AppId}/comments?item_id=${itemId}`;
  const movieComments = await getData(url);

  if (movieComments.length > 0) {
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