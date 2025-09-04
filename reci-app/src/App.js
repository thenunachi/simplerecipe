import logo from './logo.svg';
import './App.css';
import egg from './img/image-omelette.jpeg';
function App() {
  return (
    <div className="App">

      <img src={egg} />
      <h1> Simple Omelette Recipe</h1>
      <div>
        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
        to perfection, optionally filled with your choice of cheese, vegetables, or meats.
      </div>

      <div className='list '>
        <div className='heading '>
          Preparation time
        </div>
        <ul class="prep-time">
          <li className='outfit-light'><span className='outfit-bold'>Total</span>: <span>Approximately 10 minutes</span></li>
          <li className='outfit-light'><span className='outfit-bold'>Preparation</span>: <span>5 minutes</span></li>
          <li className='outfit-light'><span className='outfit-bold'>Cooking</span>: <span>5 minutes</span></li>
        </ul>
      </div>

      <div className='ingredients'>
        <div className='ingredients-list'>Ingredients</div>
        <ul className=''>
          <li className='outfit-light'> 2-3 large eggs</li>
          <li className='outfit-light'> Salt, to taste</li>
          <li className='outfit-light'>  Pepper, to taste</li>
          <li className='outfit-light'>  1 tablespoon of butter or oil</li>
          <li className='outfit-light'> Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>
      <hr />
      <div className="ingredients-list">Instructions</div>

      <ol>
        <li className="outfit-light">
          <span className="outfit-bold">Beat the eggs</span> :
          <span>
            In a bowl, beat the eggs with a pinch of salt and pepper until they are
            well mixed. You can add a tablespoon of water or milk for a fluffier texture.
          </span>
        </li>

        <li className="outfit-light">
          <span className="outfit-bold">Heat the pan</span> :
          <span>
            Place a non-stick frying pan over medium heat and add butter or oil.
          </span>
        </li>

        <li className="outfit-light">
          <span className="outfit-bold">Cook the omelette</span> :
          <span>
            Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to
            ensure the eggs evenly coat the surface.
          </span>
        </li>

        <li className="outfit-light">
          <span className="outfit-bold">Add fillings (optional)</span> :
          <span>
            When the eggs begin to set at the edges but are still slightly runny in the
            middle, sprinkle your chosen fillings over one half of the omelette.
          </span>
        </li>

        <li className="outfit-light">
          <span className="outfit-bold">Fold and serve</span> :
          <span>
            As the omelette continues to cook, carefully lift one edge and fold it over
            the fillings. Let it cook for another minute, then slide it onto a plate.
          </span>
        </li>

        <li className="outfit-light">
          <span className="outfit-bold">Enjoy</span> :
          <span>
            Serve hot, with additional salt and pepper if needed.
          </span>
        </li>
      </ol>
      <hr />
      <div className="ingredients-list"> Nutrition</div>

      <div className="outfit-light">
        The table below shows nutritional values per serving without the additional fillings.
        <div className='table'>
          <div>Calories</div>
          <div className="contents">277kcal</div>

          <div>Carbs</div>
          <div className="contents">0g</div>

          <div>Protein</div>
          <div className="contents">20g</div>

          <div>Fat</div>
          <div className="contents">22g</div>
        </div>
      </div>

    </div>
  );
}

export default App;
