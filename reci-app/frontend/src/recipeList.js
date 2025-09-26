import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import './recipeList.css'
import FloatingFood from "./FloatingFood";
import Pasta from "./img/Pasta.gif";
import Chef from "./img/Chef.gif";
import c from "./img/c.gif";
import { motion } from "framer-motion";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("")
    useEffect(() => {
        fetch("http://localhost:8000/recipes/")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch recipes");
                return res.json();
            })
            .then((data) => {
                setRecipes(data.recipes)
                console.log(data, "dta")
            })
            .catch((err) => {
                console.error(err);
                setError("Could not load recipes.");
            });
    }, [])
    const filteredRecipes = recipes.filter((rec) =>
        rec.title.toLowerCase().includes(search.toLowerCase())
    );

   return (
  <div>
    <div className="hero-content">
      <div className="hero-header">
        <img src={c} alt="Cooking animation" className="hero-gif" />
        <h1>All Recipes</h1>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/newRecipe" className="btn-primary">Add Recipe</Link>
        </motion.div>
      </div>

      <div className="hero-search">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="search-results">
        {search ? (
          filteredRecipes.length > 0 ? (
            filteredRecipes.map((rec) => (
              <div key={rec.id}>{rec.title}</div>
            ))
          ) : (
            <div>No recipes available</div>
          )
        ) : null}
      </div>
    </div>

    {error && <p style={{ color: "red" }}>{error}</p>}

    <div className="recipe-list">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipes/${recipe.id}`}
          className="recipe-card"
        >
          <img src={recipe.image_url} alt={recipe.title} />
          <div className="card-body">
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);
}
export default RecipeList