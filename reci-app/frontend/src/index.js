import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RecipeDetail from './RecipeDetail';
import reportWebVitals from './reportWebVitals';
import NewRecipe from './newRecipe';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './recipeList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<RecipeList />} />
        <Route path="/newRecipe" element={<NewRecipe />} />
        <Route path="/recipes/:id" element={<RecipeDetail/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
