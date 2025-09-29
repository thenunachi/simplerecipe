// src/api.js
const API_BASE = process.env.REACT_APP_API_URL;
export async function getThings() {
  const res = await fetch(`${API_BASE}/recipes`);
  return res.json();
}
