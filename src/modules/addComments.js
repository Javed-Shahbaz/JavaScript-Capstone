import { API_URL2, AppId } from './Vars.js';

// Add data to API
const addComment = async (comment) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: comment,
      redirect: 'follow',
    };

    const response = await fetch(`${API_URL2}apps/${AppId}/comments/`,
      requestOptions);
    const result = await response.text();
    return result;
  } catch (error) {
    return error;
  }
};

export { addComment };