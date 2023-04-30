import { API_URL2, AppId } from './Vars.js';

const getLikes = async (itemId) => {
  const url = `${API_URL2}apps/${AppId}/likes/`;
  const response = await fetch(url);
  const likesData = await response.json();

  // Find number of likes for item_id
  const itemLikes = likesData.find((item) => item.item_id === itemId);

  // return nuember of likes when exist item or 0
  return itemLikes ? parseInt(itemLikes.likes, 10) : 0;
};

export default getLikes;
