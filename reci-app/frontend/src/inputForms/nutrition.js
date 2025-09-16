import { useState } from "react";
import '../newRecipe.css'
const Nutrition = ({ nutrition, setNutrition }) => {
    const handleChange = (e) => {
        const { name, value } = e.target
        setNutrition({
            ...nutrition,
            [name]: value
        })
    }


    return (
        <div>
            <h3>Nutrition</h3>
            <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <label className="label">
                Calories:
                <input
                    type="number"
                    name="calories"
                    value={nutrition.calories}
                    onChange={handleChange} />

            </label>
            <br />
            <label className="label">
                Protein (g):
                <input
                    type="number"
                    name="protein"
                    value={nutrition.protein}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label className="label">
                Carbs (g):
                <input
                    type="number"
                    name="carbs"
                    value={nutrition.carbs}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label className="label">
                Fat (g):
                <input
                    type="number"
                    name="fat"
                    value={nutrition.fat}
                    onChange={handleChange}
                />
            </label>


        </div>
    )
}
export default Nutrition;
