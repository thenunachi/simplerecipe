import { useState } from "react";


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
    <form  onSubmit={handleSubmit}>
      {ingredients.map((ingredient, index) => (
        <div key={index} style={{ marginBottom: "5px" }}>
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

      <button type="button" onClick={() => setIngredients([...ingredients, ""])}>
        + Add Ingredient
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <br />
      {/* <button type="submit">Validate Ingredients</button> */}
    </form>
  );
};
export default Ingredients;