import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
const API_BASE = process.env.REACT_APP_API_URL;
  useEffect(() => {
fetch(`${API_BASE}/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.error("Error fetching recipe:", err));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;
console.log(recipe,"rec")
  return (
    <div className="App">
      <img src={recipe.image_url} alt={recipe.title} />
      <h1>{recipe.title}</h1>
      <div>{recipe.description}</div>

      {/* Prep Times */}
      <div className='list '>
        <div className='heading '>Preparation time</div>
        <ul className="prep-time">
          {recipe.prep_times.map((pt) => (
            <div key={pt.id}>
              <li className='outfit-light'>
                <span className='outfit-bold'>Total</span>: <span>{pt.total}</span>
              </li>
              <li className='outfit-light'>
                <span className='outfit-bold'>Preparation</span>: <span>{pt.preparation}</span>
              </li>
              <li className='outfit-light'>
                <span className='outfit-bold'>Cooking</span>: <span>{pt.cooking}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>

      {/* Ingredients */}
      <div className='ingredients'>
        <div className='ingredients-list ingredients'>Ingredients</div>
        <ul>
          {recipe.ingredients.map((ing) => (
            <li key={ing.id} className='outfit-light'>{ing.name}</li>
          ))}
        </ul>
      </div>

      <hr />
      <div className='ingredients-list instructions'>Instructions</div>

      <ol>
        {recipe.instructions.map((inst) => (
          <li key={inst.id} className="outfit-light">
            <span className="outfit-bold">{inst.step_number}{inst.step_title} :</span>
            <span>  {  inst.step_description}</span>
          </li>
        ))}
      </ol>

      <hr />
      <div className='ingredients-list nutrition'>Nutrition</div>

      {/* <div className="outfit-light">
        The table below shows nutritional values per serving without the additional fillings.
        <div className='table'>
          {recipe.nutrition.map((nutri) => (
            <div key={nutri.id}>
              <div>Calories</div>
              <div className="contents">{nutri.calories}</div>

              <div>Carbs</div>
              <div className="contents">{nutri.carbs}</div>

              <div>Protein</div>
              <div className="contents">{nutri.protein}</div>

              <div>Fat</div>
              <div className="contents">{nutri.fat}</div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="outfit-light">
  The table below shows nutritional values per serving without the additional fillings.
  <div className="table-container">
  <table className="nutrition-table">
    <thead>
      <tr>
        <th>Nutrient</th>
        <th>Amount per Serving</th>
      </tr>
    </thead>
    <tbody>
      {recipe.nutrition.map((nutri) => (
   <>
          <tr>
            <td>Calories</td>
            <td>{nutri.calories}</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>{nutri.carbs}</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>{nutri.protein}</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>{nutri.fat}</td>
          </tr>
      </>
      ))}
    </tbody>
  </table>
</div>
    </div>
    </div>
  );
}

export default RecipeDetail;