const getComments = async (movieId) => {
  const response = await fetch(`comments/USLjK4j6M0l6C9piwfTK/comments?item_id=${movieId}`);
  const myJson = await response.json(); // extract JSON from the http respo

  return myJson;
};

export default getComments;
