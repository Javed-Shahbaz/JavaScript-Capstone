import { API_URL2, AppId } from "./Vars.js";

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

    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/USLjK4j6M0l6C9piwfTK/comments/`,
      requestOptions,
    );
    const result = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

export { addComment };