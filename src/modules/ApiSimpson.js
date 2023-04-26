import { API_URL1, API_URL2 } from './Vars.js'

async function getData() {
  const resp = await fetch(API_URL1);
  const json = await resp.json();
  return json.slice(0, 6);
}

export default getData;