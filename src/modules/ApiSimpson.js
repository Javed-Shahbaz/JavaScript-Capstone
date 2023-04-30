import { API_URL1 } from './Vars.js';

const getData = async (link) => {
  try {
    const response = await fetch(link, {
      method: 'GET',
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return error;
  }
};

const countOccurrences = async () => {
  const data = await getData(API_URL1);
  return data.length;
};
export { getData, countOccurrences };