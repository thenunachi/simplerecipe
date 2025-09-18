import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import './recipeList.css'
const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState("");
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
    return (
        <div>
            <h1>All Recipes</h1>
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