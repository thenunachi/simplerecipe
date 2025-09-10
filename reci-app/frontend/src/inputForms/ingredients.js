import { useState, useEffect } from "react";


const Ingredients = () => {
    const [ingredients, setIngredients] = useState([""])
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!ingredients) {
            setError("The feilds are required")
            return;
        }
        setError("")
        fetch("http://localhost:8000/recipes/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ingredients: ingredients
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log("Saved ingredients:", data)
            }
            ).catch((err)=>console.error("Error from ingredients:" ,err))
    }
    return (
        <form onSubmit={handleSubmit}>
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
                    <button type="button" onClick={() => setIngredients(ingredients.filter((_, i) => i !== index))}>
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" onClick={() => setIngredients([...ingredients, ""])}>
                + Add Ingredient
            </button>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
export default Ingredients