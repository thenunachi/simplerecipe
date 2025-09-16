import { useState } from "react";
import "../newRecipe.css";

const Ingredients = ({ ingredients, setIngredients }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ingredients.length === 0 || ingredients.some((ing) => !ing.trim())) {
      setError("Please enter all ingredient fields");
      return;
    }

    setError("");
    console.log("Ingredients ready to send:", ingredients);
    // ❌ Don't call fetch here if you're using one POST request from NewRecipe
    // Instead, let parent (NewRecipe) handle the full payload submit
  };

  return (
   <form onSubmit={handleSubmit} className="ingredients-container">
  <div className="label">Add Ingredients:</div>
  {ingredients.map((ingredient, index) => (
    <div key={index} className="tab">
      <input
        type="text"
        placeholder={`Ingredient ${index + 1}`}
        value={ingredient}
        onChange={(e) => {
          const newIngredients = [...ingredients];
          newIngredients[index] = e.target.value;
          setIngredients(newIngredients);
        }}
      />
      <button
        type="button"
        onClick={() =>
          setIngredients(ingredients.filter((_, i) => i !== index))
        }
      >
        Remove
      </button>
    </div>
  ))}

  <button
    type="button"
    className="add-ingredient-btn"
    onClick={() => setIngredients([...ingredients, ""])}
  >
    + Add Ingredient
  </button>

  {error && <p className="error-text">{error}</p>}
</form>
  );
};
export default Ingredients;