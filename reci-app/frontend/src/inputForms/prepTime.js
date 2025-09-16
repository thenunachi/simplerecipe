import React from "react"
import { useState, useEffect } from "react"
import "../newRecipe.css"


const PrepTime = ({ fetchPrepTimes,prepTime,setPrepTime }) => {
   return (
    <div>
      <label className="label">
        Total time for cooking:
        <input
          type="text"
          value={prepTime.total}
          onChange={(e) => setPrepTime({ ...prepTime, total: e.target.value })}
        />
      </label>

      <label className="label">
        Preparation Time:
        <input
          type="text"
          value={prepTime.preparation}
          onChange={(e) =>
            setPrepTime({ ...prepTime, preparation: e.target.value })
          }
        />
      </label>

      <label className="label">
        Cooking Time:
        <input
          type="text"
          value={prepTime.cooking}
          onChange={(e) => setPrepTime({ ...prepTime, cooking: e.target.value })}
        />
      </label>
    </div>
  );
}

export default PrepTime