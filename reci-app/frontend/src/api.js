const API_BASE = process.env.REACT_APP_API_URL;

export async function getThings() {
  const res = await fetch(`${API_BASE}/recipes`); // append endpoint here
  return res.json();
}
console.log(API_BASE,"api_base")