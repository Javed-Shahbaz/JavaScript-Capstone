import { API_URL2, AppId } from './Vars.js';

const sendLike = async (itemId) => {
  const url = `${API_URL2}apps/${AppId}/likes/`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });

  if (response.status === 201) {
    return true;
  }
  return false;
};

export default sendLike;