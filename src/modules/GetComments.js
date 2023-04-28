import { API_URL2, AppId } from './Vars.js';

const getComments = async (item_Id) => {
  const url = `${API_URL2}apps/${AppId}/comments?item_id=${item_Id}`;
  const response = await fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Comments not found.');
    })
    .then((data) => {
      const comments = document.getElementById('comments');

      comments.innerHTML = '';
      data.forEach((comment) => {
        const pComments = document.createElement('p');
        pComments.innerHTML = `
          <small>${comment.creation_date} - ${comment.username}:</small> <strong>${comment.comment}</strong>
          `;
        comments.appendChild(pComments);
      });
    });
};

export default getComments;
