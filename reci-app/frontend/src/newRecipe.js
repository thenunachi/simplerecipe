// NewRecipe.js
import { useState } from "react";
import PrepTime from "./inputForms/prepTime";
import Ingredients from "./inputForms/ingredients"
import Nutrition from "./inputForms/nutrition";
import Instruction from "./inputForms/instruction";
import './newRecipe.css'
import './inputForms/instruction.css'

const NewRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl,setImgUrl] = useState("")
  const [prepTime, setPrepTime] = useState({
    total: "",
    preparation: "",
    cooking: ""
  });
  const [err, setErr] = useState("")
  const [ingredients, setIngredients] = useState([""]);
  const [nutrition, setNutrition] = useState({
    calories: "",
    protein: "",
    carbs: "",
    fat: ""
  })
  const [instructions,setInstructions] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      image_url : imgUrl,
      prepTime,
      ingredients,
      nutrition,
      instructions
    };

    console.log("Submitting:", payload);

    fetch("http://localhost:8000/recipes/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save recipe");
        return res.json();
      })
      .then((data) => {
        console.log("Saved recipe:", data);
        alert("Recipe saved successfully!");
      })
      .catch((err) => {
        console.error("Error:", err);
        setErr("Failed to save recipe. Please try again.");
      });
  };

  return (
    <div className="forms">
      <h1>Create New Recipe</h1>
      <form className= "formInput" onSubmit={handleSubmit}>
        <label className="label">
          Enter the title:
          <input
            type="text"
            value={title}
            placeholder="Write the title of the recipe"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label className="label">
          Enter the description of recipe:
          <textarea
            value={description}
            placeholder="Write the description of the recipe"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
         <label className="label">
          Enter the image of recipe:
          <textarea
            value={imgUrl}
            placeholder="Add the image of the recipe"
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </label>

        {/* Pass state + setter into PrepTime */}
        <PrepTime prepTime={prepTime} setPrepTime={setPrepTime} />
        <Ingredients ingredients={ingredients} setIngredients={setIngredients} />
        <Instruction instructions={instructions} setInstructions={setInstructions}/>
        <Nutrition nutrition={nutrition} setNutrition={setNutrition} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewRecipe;