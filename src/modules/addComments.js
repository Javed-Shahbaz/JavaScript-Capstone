import { API_URL2, AppId } from "./Vars.js";
const AddComment = () =>{

};

const showComment = async (Id, name, description) => {
  const data = `{"item_id": "${Id}", "username": "${name}", "comment": "${description}"}`;

  const mBody = JSON.parse(data);

  const response = await fetch(`${API_URL2}/${AppId}/comments?item_id=${Id}`,
    {
      method: 'POST',
      body: JSON.stringify(mBody),

      headers: { 'Content-Type': 'application/JSON' },
    });
  // await response; // extract JSON from the http response
  const result = await response.text();
  return result;
};

export { showComment,AddComment };